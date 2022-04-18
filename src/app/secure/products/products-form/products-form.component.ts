import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  form!:FormGroup;
  create!:boolean;
  id!:number;
  constructor(
    private fb:FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      title:'',
      description:'',
      image:'',
      price:''
    })
    this.create=this.route.snapshot.data['create'];
    if(!this.create){
      this.id=this.route.snapshot.params['id'];
      this.productService.get(this.id).subscribe(product=>{
        this.form.patchValue(product)
      })
    }
  }
  submit():void{
    this.create 
    ? 
    this.productService.create(this.form.getRawValue()).subscribe(()=>this.router.navigate(['/products']))
    :
    this.productService.update(this.id,this.form.getRawValue()).subscribe(()=>this.router.navigate(['/products']));
   
  }

}
