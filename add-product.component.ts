import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  cuisine: ProductCategory = new ProductCategory(); 
  id: number = 0;
  productCuisines: ProductCategory[];
  selectedCuisine:number = 1;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
     this.listProductCategories();
  }


  
  handleAddProduct() {
     

    this.productService.addProduct(this.product).subscribe( data =>{
       
       
    },
    error => console.log(error));
    console.log(this.product);
    window.location.replace('/products');
  }

  listProductCategories() {
    
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCuisines = data;
      }
    );
  }
 

}
