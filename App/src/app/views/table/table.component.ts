import { Component, OnInit } from '@angular/core';
import {TranslateService, TranslationChangeEvent} from "@ngx-translate/core";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  window: any = window;
  rowData: any;
  isDropdownOpen: boolean;

  constructor(public translate: TranslateService, ) {
    const that = this;
    this.window.operateEvents = {
      'click .delete': function (e, value, row, index) {
        that.delete();
      },
      'click .modify': function (e, value, row, index) {
        that.modify();
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

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales[this.translate.currentLang]);  // locales中支持zh-CN和en这样的写法，如果i18n中json名是zh_CN或en_us这样的写法，bootstrap-table不能加载自身的国际化文件

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
<button class="btn btn-default authority table-operate-btn floor-settings modify" style="margin:0;border-right: none;">${this.translate.instant('common.edit')}</button>\
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

  delete() {
    console.log('delete');
  }

  modify() {
    console.log('modify');
  }
}
