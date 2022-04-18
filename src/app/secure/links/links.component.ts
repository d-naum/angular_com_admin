import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/interface/order.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  columns=['ID', 'code', 'count', 'revenue'];
  dataSource=new MatTableDataSource();
  id!: number ;
  constructor(
    private linkService: LinkService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.linkService.all(this.id).subscribe(links=>{
      this.dataSource.data=links
    })
  }
  sum(orders:Order):number{
    return orders.reduce((s,o)=> s+ o.total, 0)
  }

}
