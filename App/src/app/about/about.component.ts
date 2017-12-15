import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../shared/services/local-storage.service";
import {TranslateService, TranslationChangeEvent} from "@ngx-translate/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  menuData = [
    {
      title: 'title1',
      routeLink: 'homepage',
      icon: 'fa fa-address-book-o'
    },
    {
      title: 'title2',
      routeLink: 'about',
      icon: 'fa fa-user-o'
    }
  ];

  window: any = window;
  rowData: any;
  isDropdownOpen: boolean;

  constructor(public translate: TranslateService, private ls: LocalStorageService) {
    this.window.operateEvents = {
      'click .delete': function (e, value, row, index) {

      },
      'click .modify': function (e, value, row, index) {

      }
    };
  }

  ngOnInit() {
    this.rowData = [
      {
        'groupname': '1',
        'describe': '2'
      },
      {
        'groupname': '1',
        'describe': '2'
      }
    ];
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      $('#table').bootstrapTable('destroy');
      this.initTable();
    });
    this.initTable();
  }


  initTable() {
    const gridOptions: any = {
      pagination: true,
      pageSize: 10,
      pageList: [10, 25, 50, 100],
      search: true,
      strictSearch: false,
      searchText: '',
      paginationDetailHAlign: 'left',
      paginationHAlign: 'right',
      clickToSelect: false,
      sortable: true,
    };


    if (this.translate.currentLang === 'zh') {
      $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh']);
    } else {
      $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['en']);
    }

    $('#table').bootstrapTable($.extend(gridOptions, {
      data: this.rowData,
      columns: this.getColumns()
    }));

    $('#table').on('show.bs.dropdown', function () {
      this.isDropdownOpen = true;
    });

    $('#table').on('hide.bs.dropdown', function () {
      this.isDropdownOpen = false;
    });
  }

  getColumns() {
    const columnDefs: any = [
      {
        field: 'groupname',
        title: this.translate.instant('groupmanagement.groupname'),
        valign: 'middle',
        align: 'center',
        events: 'operateEvents',
      },
      {
        field: 'describe',
        title: this.translate.instant('groupmanagement.describe'),
        valign: 'middle',
        align: 'center',
        events: 'operateEvents',
      },
      {
        field: 'operate',
        title: this.translate.instant('common.operate'),
        align: 'center',
        valign: 'middle',
        events: 'operateEvents',
        formatter: (value, row, index) => {
          return `<div class="btn-group table-operate-float" style="position:relative;margin:0;">\
<button class="btn btn-default authority table-operate-btn floor-settings" style="margin:0;border-right: none;">${this.translate.instant('common.edit')}</button>\
    <button class="btn btn-default dropdown-toggle table-operate-btn" style="margin:0;" id="dropdownMenu" \
                         data-toggle="dropdown" ><span class="caret"></span>\
                      </button>\
    <ul class="dropdown-menu dropdown-menu-top table-operate-ulfont" role="menu" aria-labelledby="dropdownMenu1">\
                      <li role="presentation">\
                            <a href="javascript:void(0);" class="delete" data-toggle="modal" data-target="#delConfirmModal">${this.translate.instant('common.delete')}</a>\
                      </li>\
    </ul>\
    </div>`;
        }
      }
    ];
    return columnDefs;
  }

}
