# -*- coding:utf-8 -*-
import os
import shutil
import tool
import sys

def deldist(strWorkSpace):
    delcmd = "rm -rf %s/dist"%(strWorkSpace)
    os.system(delcmd)

def copy_nodemodule():
    cmdtar = "time rsync -avzp --exclude 'node_modules-19branch.tar.gz' 10.63.241.46::node_modules_rsync_server ."
    tarnode = " tar xf node_modules.tar.gz -C ../"
    tarnode1 = " tar xf node_modules.tar.gz -C ./"
    os.system(cmdtar)
    os.system(tarnode)
    os.system(tarnode1)

def build_web( strWorkSpace):
    print "-->build web--"

    testpath="";
    if (os.path.exists(tool.get_uniportal_verfile(strWorkSpace))):
        os.system("rm -rf %s"%(tool.get_uniportal_verfile(strWorkSpace)))
    strCurDir = os.getcwd()
    os.chdir(strWorkSpace)

    if(os.path.exists("/root/web2.0/node6")):
        print "/root/web2.0/node6"
        cmd = "/root/web2.0/node /root/web2.0/npm run build.prod"
    else:
        cmd = "./node_modules/@angular/cli/bin/ng build --prod --aot --base-href /Angular-cli-starter/"
    os.system(cmd)
    os.chdir(strCurDir)
    if (not os.path.exists(os.path.join(tool.get_uniportal_verfile(strWorkSpace),"index.html"))):
        print "<-- build_web fail--"
        testpath = (os.path.join(tool.get_uniportal_verfile(strWorkSpace),"index.html"))
        print(testpath)
        return False
    print "<-- build web success --"
    return True



def copy_version(strWorkSpace):

    verfile = tool.get_uniportal_verfile(strWorkSpace)
    buildfile =  tool.get_uniportal_resfile(strWorkSpace)
    if os.path.exists(buildfile):
        shutil.rmtree(buildfile)

    shutil.copytree(verfile,buildfile)

def build_uniportal():
     nginxtar = "docker load < nginx.tar"
     delImage = "docker rmi starter"
     buildtar = "docker build -t library/starter ."
     savetar = "docker save starter > starter.tar"
     os.system(nginxtar)
     os.system(delImage)
     os.system(buildtar)
     os.system(savetar)

def mount_export():
    cmdmakdocker = "mkdir Angular-cli-starter/export"
    os.system(cmdmakdocker)

if __name__ == '__main__':
    strWorkSpace = os.path.abspath(os.path.join(os.path.dirname(__file__),os.pardir))
    deldist(strWorkSpace)
    if(build_web(strWorkSpace)):
        copy_version(strWorkSpace)
        mount_export()
        build_uniportal()

    else:
        print "<-- build_web fail--"
        sys.exit()

