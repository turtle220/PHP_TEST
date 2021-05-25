@include('inc.header')
 <div style="padding-left:10%; padding-right:10%; padding-top:2%;">
   <div style="width: 30%">
      <form action="">
        <div style="border: 1px solid #8f8f8f; border-radius: 5px; height: 169px;">
          @include('inc.dropdown')
        </div>
        <div style="border: 1px solid #8f8f8f; border-radius: 5px; height: 430px; margin-top:5%">
          @include('inc.brand')
          <div style=" border-top: 1px solid; margin-top: 4%;">
            @include('inc.price')
          </div>
          <div style=" border-top: 1px solid; margin-top: 4%;"> 
            @include('inc.postingdate')
          </div>
        </div>

      </form>
   </div>
   <div style="width: 70%">

   </div>
 </div>
@include('inc.footer')