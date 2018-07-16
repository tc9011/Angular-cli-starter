# -*- coding:utf-8 -*-

import os

#def get_client(strWorkSpace):
#    return  os.path.join(strWorkSpace,"client")

def get_uniportal_verfile(strWorkSpace):
    #return os.path.join(strWorkSpace,"dist","prod")
    return os.path.join(strWorkSpace,"dist")

def get_uniportal_resfile(strWorkSpace):
    return os.path.join(strWorkSpace,"build","faceportal")

# def get_complie(strWorkSpace):
#     return os.path.join(strWorkSpace,"build","complie")

