import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/interface/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,AfterViewInit {
  columns=['ID', 'image', 'title', 'description','price','action'];
  dataSource=new MatTableDataSource();
  constructor(private productService: ProductsService) { }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.productService.all().subscribe(products=>{
      this.dataSource.data=products
    })
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator
  } 
  delete(id:number):void {
    if(confirm('Are you sure?')){
      this.productService.delete(id).subscribe(
        ()=>{
          // this.dataSource.data = this.dataSource.data.filter((p:Product)=>p.id!==id)
        }
      )
    }
  }

}
