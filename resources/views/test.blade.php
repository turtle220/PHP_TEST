@include('inc.header')
 <div style="padding-left:10%; padding-right:10%; padding-top:2%; display: flex;">
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
   <span style="width: 6%"></span>
   <div style="width: 70%">
      <div style="border: 1px solid #8f8f8f8f; border-radius: 5px; height: 99.8%;">
        @foreach ($articles as $article)
          <div style="padding: 3%; display: flex; border-bottom: 1px solid #8f8f8f8f;">
            <div style="width: 30%">
              <img src="{{ url('images').'/'.$article->image }}" style="width: 90%" alt="">
            </div>
            <div style="width: 70%">
              <h2 style="margin: 0px">{{ $article->title }}</h2>
              <div style="display: flex; justify-content: space-between; width: 35%;">
                <p style="font-size: 12px">price: {{ $article->price }}</p>
                <p style="font-size: 12px">location: {{ $article->location }}</p>
              </div>
                <p style="font-size: 15px">{{ $article->description }}</p>
            </div>
          </div>
        @endforeach
      </div>
   </div>
 </div>
@include('inc.footer')