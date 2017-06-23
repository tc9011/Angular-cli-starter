import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#table").bootstrapTable({
      columns: [
        [
          {
            field: 'state',
            checkbox: true,
            rowspan: 2,
            align: 'center',
            valign: 'middle'
          }, {
          title: 'Item ID',
          field: 'id',
          rowspan: 2,
          align: 'center',
          valign: 'middle',
          sortable: true,
          // footerFormatter: totalTextFormatter
        }, {
          title: 'Item Detail',
          colspan: 3,
          align: 'center'
        }
        ],
        [
          {
            field: 'name',
            title: 'Item Name',
            sortable: true,
            editable: true,
            // footerFormatter: totalNameFormatter,
            align: 'center'
          }, {
          field: 'price',
          title: 'Item Price',
          sortable: true,
          align: 'center',
          editable: {
            type: 'text',
            title: 'Item Price',
            validate: function (value) {
              value = $.trim(value);
              if (!value) {
                return 'This field is required';
              }
              if (!/^\$/.test(value)) {
                return 'This field needs to start width $.'
              }
              var data = $("#table").bootstrapTable('getData'),
                index = $(this).parents('tr').data('index');
              console.log(data[index]);
              return '';
            }
          },
          // footerFormatter: totalPriceFormatter
        }, {
          field: 'operate',
          title: 'Item Operate',
          align: 'center',
          // events: operateEvents,
          // formatter: operateFormatter
        }
        ]
      ]
    });
  }

}
