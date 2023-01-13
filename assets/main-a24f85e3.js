var N=Object.defineProperty;var R=(r,e,t)=>e in r?N(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>(R(r,typeof e!="symbol"?e+"":e,t),t),k=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var u=(r,e,t)=>(k(r,e,"read from private field"),t?t.call(r):e.get(r)),c=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)};var l=(r,e,t)=>(k(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout(function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")},500)};function a(r){const e=document.createElement("div");return e.innerHTML=r,e.firstElementChild}class A{constructor(e=[]){n(this,"elem",null);n(this,"getCarousel",e=>`
      <div class="carousel">
          <div class="carousel__arrow carousel__arrow_right">
              <img src="./images/icons/angle-icon.svg" alt="icon">
          </div>
          <div class="carousel__arrow carousel__arrow_left" style="display: none">
              <img src="./images/icons/angle-left-icon.svg" alt="icon">
          </div>
          <div class="carousel__inner">${this.getSlides(e)}</div>
      </div>
    `);n(this,"getSlide",({name:e,price:t,image:s,id:i})=>`
      <div class="carousel__slide" data-id="${i}">
        <img src="./images/carousel/${s}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">${this.formatPrice(t)}</span>
          <div class="carousel__title">${e}</div>
          <button type="button" class="carousel__button">
            <img src="./images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `);n(this,"getSlides",e=>e.map(t=>this.getSlide(t)).join(""));n(this,"onAddBtnClick",e=>{if(!e.closest(".carousel__button"))return;const s=e.closest(".carousel__slide[data-id]").dataset.id,i=new CustomEvent("product-add",{bubbles:!0,detail:s});this.elem.dispatchEvent(i)});n(this,"moveSlider",()=>{const e=document.querySelector(".carousel__arrow_right"),t=document.querySelector(".carousel__arrow_left"),s=document.querySelector(".carousel__inner"),i=document.querySelector(".carousel__inner").offsetWidth;let o=-this.counter*i;s.style.transform=`translateX(${o}px)`,this.counter===0?t.style.display="none":t.style.display="",this.counter===this.slides.length-1?e.style.display="none":e.style.display=""});n(this,"formatPrice",e=>`€${parseInt(e).toFixed(2)}`);n(this,"onPrevButtonClick",()=>{this.counter--,this.counter<0&&(this.counter=0),this.moveSlider()});n(this,"onNextButtonClick",()=>{this.counter++,this.counter>this.slides.length-1&&(this.counter=this.slides.length-1),this.moveSlider()});this.slides=e,this.counter=0,this.render(),this.addEventListeners()}render(){this.elem=a(this.getCarousel(this.slides))}addEventListeners(){this.elem.addEventListener("click",({target:e})=>{const t=e.closest(".carousel__arrow_left"),s=e.closest(".carousel__arrow_right");this.onAddBtnClick(e),t&&this.onPrevButtonClick(),s&&this.onNextButtonClick()})}}const G=[{name:"Penang shrimp",price:16,image:"penang_shrimp.png",id:"penang-shrimp"},{name:"Chicken cashew",price:14,image:"chicken_cashew.png",id:"chicken-cashew"},{name:"Red curry veggies",price:12.5,image:"red_curry_vega.png",id:"red-curry-veggies"},{name:"Chicken springrolls",price:6.5,image:"chicken_loempias.png",id:"chicken-springrolls"}];var v,I,g,x,b,$;class j{constructor(e){c(this,v);c(this,g);c(this,b);this.categories=e,this.elem=l(this,v,I).call(this)}}v=new WeakSet,I=function(){const e=a(l(this,b,$).call(this)),t=e.querySelector(".ribbon__inner"),s=e.querySelector(".ribbon__arrow_left"),i=e.querySelector(".ribbon__arrow_right");s.addEventListener("click",()=>{t.scrollBy(-350,0)}),i.addEventListener("click",()=>{t.scrollBy(350,0)}),t.addEventListener("scroll",()=>{t.scrollLeft<1?s.classList.remove("ribbon__arrow_visible"):s.classList.add("ribbon__arrow_visible"),t.scrollWidth-t.scrollLeft-t.clientWidth<1?i.classList.remove("ribbon__arrow_visible"):i.classList.add("ribbon__arrow_visible")});const o=e.querySelectorAll(".ribbon__item");for(const d of o)d.addEventListener("click",l(this,g,x));return e},g=new WeakSet,x=function(e){e.preventDefault();const t=new CustomEvent("ribbon-select",{detail:this.dataset.id,bubbles:!0});this.dispatchEvent(t)},b=new WeakSet,$=function(){return`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="./images/icons/angle-icon.svg" alt="icon">
        </button>
        <nav class="ribbon__inner">
          ${this.categories.map(e=>`<a href="#" class="ribbon__item" data-id="${e.id}">${e.name}</a>`).join(`
`)}
        </nav>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="./images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `};const D=[{id:"",name:"All"},{id:"salads",name:"Salads"},{id:"soups",name:"Soups"},{id:"chicken-dishes",name:"Chicken dishes"},{id:"beef-dishes",name:"Beef dishes"},{id:"seafood-dishes",name:"Seafood dishes"},{id:"vegetable-dishes",name:"Vegetable dishes"},{id:"bits-and-bites",name:"Bits and bites"},{id:"on-the-side",name:"On the side"}];var f,M,y,m,S,L,p,P,w,T;class W{constructor({steps:e,value:t=0}){c(this,f);c(this,p);c(this,w);c(this,y,()=>{this.elem.classList.add("slider_dragging"),document.addEventListener("pointermove",u(this,m)),document.addEventListener("pointerup",u(this,S),{once:!0})});c(this,m,e=>{const t=this.elem.querySelector(".slider__thumb"),s=this.elem.querySelector(".slider__progress");let o=(e.clientX-this.elem.getBoundingClientRect().left)/this.elem.offsetWidth;o<0&&(o=0),o>1&&(o=1);let d=o*100;t.style.left=`${d}%`,s.style.width=`${d}%`;let _=this.steps-1,q=o*_,h=Math.round(q);this.elem.querySelector(".slider__steps").childNodes[h+1].classList.add("slider__step-active");const B=this.elem.querySelector(".slider__value");B.innerHTML=h,this.value=h});c(this,S,()=>{document.removeEventListener("pointermove",u(this,m)),this.elem.classList.remove("slider_dragging"),l(this,p,P).call(this)});c(this,L,e=>{let s=(e.clientX-this.elem.getBoundingClientRect().left)/this.elem.offsetWidth,i=this.steps-1,o=s*i,d=Math.round(o),_=d/i*100;this.elem.querySelector(".slider__step-active").classList.remove("slider__step-active");let q=this.elem.querySelector(".slider__thumb"),h=this.elem.querySelector(".slider__progress");q.style.left=`${_}%`,h.style.width=`${_}%`,this.elem.querySelector(".slider__steps").childNodes[d+1].classList.add("slider__step-active");const B=this.elem.querySelector(".slider__value");B.innerHTML=d,this.value=d,l(this,p,P).call(this)});this.steps=e,this.value=t,this.elem=l(this,f,M).call(this)}}f=new WeakSet,M=function(){const e=a(l(this,w,T).call(this));e.addEventListener("click",u(this,L));const t=e.querySelector(".slider__thumb");return t.ondragstart=()=>!1,e.addEventListener("pointerdown",u(this,y)),e},y=new WeakMap,m=new WeakMap,S=new WeakMap,L=new WeakMap,p=new WeakSet,P=function(){const e=new CustomEvent("slider-change",{detail:this.value,bubbles:!0});this.elem.dispatchEvent(e)},w=new WeakSet,T=function(){let e="";for(let t=0;t<this.steps;t++)t==this.value?e+='<span class="slider__step-active"></span>':e+="<span></span>";return`
      <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value">${this.value}</span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps">
          ${e}
        </div>
      </div>
    `};class V{constructor({name:e,price:t,image:s,id:i}={}){n(this,"elem",null);n(this,"formatPrice",e=>`€${parseInt(e).toFixed(2)}`);n(this,"onAddBtnClick",e=>{const s=e.target.closest(".card__button");if(!s)return;const i=new CustomEvent("product-add",{bubbles:!0,detail:this.productID});s.dispatchEvent(i)});this.img=s,this.price=t,this.name=e,this.productID=i,this.render()}template(){return`
      <div class="card">
        <div class="card__top">
          <img src="./images/products/${this.img}" class="card__image" alt="product">
          <span class="card__price">${this.formatPrice(this.price)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.name}</div>
          <button type="button" class="card__button">
            <img src="./images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `}render(){this.elem=a(this.template()),this.elem.addEventListener("click",this.onAddBtnClick)}}class U{constructor(e){this.products=e,this.filters={},this.render()}grid(){return this.elem.querySelector(".products-grid__inner")}render(){this.elem=a(`
      <div class="products-grid">
        <div class="products-grid__inner"></div>
      </div>
    `),this.renderContent()}renderContent(){this.grid().innerHTML="";for(let e of this.products){if(this.filters.noNuts&&e.nuts||this.filters.vegeterianOnly&&!e.vegeterian||this.filters.maxSpiciness!==void 0&&e.spiciness>this.filters.maxSpiciness||this.filters.category&&e.category!=this.filters.category)continue;let t=new V(e);this.grid().append(t.elem)}}updateFilter(e){Object.assign(this.filters,e),this.renderContent()}}class Y{constructor(){this.render(),this.addEventListeners()}render(){this.elem=a('<div class="cart-icon"></div>')}update(e){e.isEmpty()?this.elem.classList.remove("cart-icon_visible"):(this.elem.classList.add("cart-icon_visible"),this.elem.innerHTML=`
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${e.getTotalCount()}</span>
          <span class="cart-icon__price">€${e.getTotalPrice().toFixed(2)}</span>
        </div>`,this.updatePosition(),this.elem.classList.add("shake"),this.elem.addEventListener("transitionend",()=>{this.elem.classList.remove("shake")},{once:!0}))}addEventListeners(){document.addEventListener("scroll",()=>this.updatePosition()),window.addEventListener("resize",()=>this.updatePosition())}updatePosition(){if(document.documentElement.clientWidth<=767){this.resetPosition();return}this.initialTopCoord||(this.initialTopCoord=this.elem.getBoundingClientRect().top+window.pageYOffset),window.pageYOffset>this.initialTopCoord?this.fixedPosition():this.resetPosition()}fixedPosition(){Object.assign(this.elem.style,{position:"fixed",top:"50px",zIndex:1e3,left:Math.min(document.querySelector(".container").getBoundingClientRect().right+20,document.documentElement.clientWidth-this.elem.offsetWidth-10)+"px"})}resetPosition(){Object.assign(this.elem.style,{position:"",top:"",left:"",zIndex:""})}}const z=r=>Array.from(r).map(e=>{switch(e){case"&":return"&amp;";case'"':return"&quot;";case"'":return"&#39;";case"<":return"&lt;";case">":return"&gt;";default:return e}}).join("");var E,O,C,F;class X{constructor(){c(this,E);c(this,C);this.elem=l(this,E,O).call(this)}open(){document.body.append(this.elem),document.body.classList.add("is-modal-open")}setTitle(e){const t=this.elem.querySelector(".modal__title");t.textContent=e}setBody(e){const t=this.elem.querySelector(".modal__body");t.innerHTML="",t.append(e)}close(){this.elem.remove(),document.body.classList.remove("is-modal-open")}}E=new WeakSet,O=function(){const e=a(l(this,C,F).call(this));return e.querySelector(".modal__close").addEventListener("click",()=>{this.close()},{once:!0}),document.addEventListener("keydown",s=>{s.code==="Escape"&&this.close()},{once:!0}),e},C=new WeakSet,F=function(){return`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="./images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title">
              Вот сюда нужно добавлять заголовок
            </h3>
          </div>
          <div class="modal__body">
            A сюда нужно добавлять содержимое тела модального окна
          </div>
        </div>
      </div>
    `};class K{constructor(e){n(this,"cartItems",[]);n(this,"onModalBodyClick",e=>{if(e.target.closest(".cart-counter__button")){let s=e.target.closest("[data-product-id]").dataset.productId;this.updateProductCount(s,e.target.closest(".cart-counter__button_plus")?1:-1)}});this.cartIcon=e,this.addEventListeners()}addProduct(e){let t=this.cartItems.find(s=>s.product.id==e.id);t?t.count++:(t={product:e,count:1},this.cartItems.push(t)),this.onProductUpdate(t)}updateProductCount(e,t){let s=this.cartItems.find(i=>i.product.id==e);s.count+=t,s.count==0&&this.cartItems.splice(this.cartItems.indexOf(s),1),this.onProductUpdate(s)}isEmpty(){return this.cartItems.length===0}getTotalCount(){return this.cartItems.reduce((e,t)=>e+t.count,0)}getTotalPrice(){return this.cartItems.reduce((e,t)=>e+t.product.price*t.count,0)}renderProduct(e,t){return a(`
    <div class="cart-product" data-product-id="${e.id}">
      <div class="cart-product__img">
        <img src="./images/products/${e.image}" alt="product">
      </div>
      <div class="cart-product__info">
        <div class="cart-product__title">${z(e.name)}</div>
        <div class="cart-product__price-wrap">
          <div class="cart-counter">
            <button type="button" class="cart-counter__button cart-counter__button_minus">
              <img src="./images/icons/square-minus-icon.svg" alt="minus">
            </button>
            <span class="cart-counter__count">${t}</span>
            <button type="button" class="cart-counter__button cart-counter__button_plus">
              <img src="./images/icons/square-plus-icon.svg" alt="plus">
            </button>
          </div>
          <div class="cart-product__price">€${e.price.toFixed(2)}</div>
        </div>
      </div>
    </div>`)}renderOrderForm(){return a(`<form class="cart-form">
      <h5 class="cart-form__title">Delivery</h5>
      <div class="cart-form__group cart-form__group_row">
        <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
        <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
        <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
      </div>
      <div class="cart-form__group">
        <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
      </div>
      <div class="cart-buttons">
        <div class="cart-buttons__buttons btn-group">
          <div class="cart-buttons__info">
            <span class="cart-buttons__info-text">total</span>
            <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(2)}</span>
          </div>
          <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
        </div>
      </div>
    </form>`)}addEventListeners(){this.cartIcon.elem.onclick=()=>this.renderModal()}renderModal(){this.modal=new X,this.modal.setTitle("Your order"),this.modalBody=document.createElement("div");for(let{product:e,count:t}of this.cartItems)this.modalBody.append(this.renderProduct(e,t));this.modalBody.append(this.renderOrderForm()),this.modalBody.addEventListener("click",this.onModalBodyClick),this.modalBody.querySelector("form").onsubmit=e=>this.onSubmit(e),this.modal.setBody(this.modalBody),this.modal.elem.addEventListener("modal-close",()=>{this.modal=null,this.modalBody=null}),this.modal.open()}onProductUpdate({product:e,count:t}){if(this.cartIcon.update(this),!(!this.modal||!document.body.classList.contains("is-modal-open"))){if(this.cartItems.length==0){this.modal.close();return}t==0?this.modalBody.querySelector(`[data-product-id="${e.id}"]`).remove():(this.modalBody.querySelector(`[data-product-id="${e.id}"] .cart-counter__count`).innerHTML=t,this.modalBody.querySelector(`[data-product-id="${e.id}"] .cart-product__price`).innerHTML="€"+(t*e.price).toFixed(2)),this.modalBody.querySelector(".cart-buttons__info-price").innerHTML="€"+this.getTotalPrice().toFixed(2)}}async onSubmit(e){e.preventDefault(),this.modalBody.querySelector('button[type="submit"]').classList.add("is-loading");let t=this.modalBody.querySelector(".cart-form"),s=new FormData(t);await fetch("https://httpbin.org/post",{method:"POST",body:s}),this.modal.setTitle("Success!"),this.modalBody.querySelector('button[type="submit"]').classList.remove("is-loading"),this.cartItems=[],this.cartIcon.update(this),this.modalBody.innerHTML=`
      <div class="modal__body-inner">
        <p>
          Order successful! Your order is being cooked :) <br>
          We’ll notify you about delivery time shortly.<br>
          <img src="./images/delivery.gif">
        </p>
      </div>
      `}}class J{constructor(){}async render(){this.renderCarousel(),this.renderRibbonMenu(),this.renderStepSlider(),this.renderCartIcon(),this.cart=new K(this.cartIcon),this.products=await this.fetchProducts(),this.renderProductsGrid(),this.productsGrid.updateFilter({noNuts:document.getElementById("nuts-checkbox").checked,vegeterianOnly:document.getElementById("vegeterian-checkbox").checked,maxSpiciness:this.stepSlider.value,category:this.ribbonMenu.value}),document.body.addEventListener("product-add",({detail:e})=>{let t=this.products.find(s=>s.id==e);this.cart.addProduct(t)}),this.stepSlider.elem.addEventListener("slider-change",({detail:e})=>{this.productsGrid.updateFilter({maxSpiciness:e})}),this.ribbonMenu.elem.addEventListener("ribbon-select",({detail:e})=>{this.productsGrid.updateFilter({category:e})}),document.getElementById("nuts-checkbox").onchange=e=>{this.productsGrid.updateFilter({noNuts:e.target.checked})},document.getElementById("vegeterian-checkbox").onchange=e=>{this.productsGrid.updateFilter({vegeterianOnly:e.target.checked})}}renderCarousel(){this.carousel=new A(G),document.querySelector("[data-carousel-holder]").append(this.carousel.elem)}renderRibbonMenu(){this.ribbonMenu=new j(D),document.querySelector("[data-ribbon-holder]").append(this.ribbonMenu.elem)}renderStepSlider(){this.stepSlider=new W({steps:5,value:3}),document.querySelector("[data-slider-holder]").append(this.stepSlider.elem)}renderProductsGrid(){this.productsGrid=new U(this.products),document.querySelector("[data-products-grid-holder]").innerHTML="",document.querySelector("[data-products-grid-holder]").append(this.productsGrid.elem)}renderCartIcon(){this.cartIcon=new Y,document.querySelector("[data-cart-icon-holder]").append(this.cartIcon.elem)}async fetchProducts(){return await(await fetch("products.json")).json()}}let Q=new J;Q.render().then(()=>console.log("Страница готова!"));
