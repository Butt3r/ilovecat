export function infiniteScroll(scrollFetch) {
   
  
    let loadObserver = new IntersectionObserver(function(entries, observer){
      const entry = entries[0];

      console.log("observed target");
      console.log(entry.intersectionRatio);

      if(!entry || entry.intersectionRatio <= 0) return;
      if(entry.intersectionRatio > 0.4){
        console.log("activate scroll fetch...");
        scrollFetch();
      }
      
    });

    const target = document.querySelector(".observer");
    loadObserver.unobserve(target);
    loadObserver.observe(target);
}