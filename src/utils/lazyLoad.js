export function lazyLoad() {
    
    if("IntersectionObserver" in window){
        const lazyImg = [...document.querySelectorAll("img.lazy")];
        const options = {
          root: null,
          rootMargin: "100px",
          threshold: 1.0
        };
        let imgObserver =  new IntersectionObserver(observerHandler, options);
        
        function observerHandler(entries, observer) {
          entries.forEach(function(entry){
            if(entry.isIntersecting){
            let target = entry.target;
            target.src = target.dataset.src;
            target.classList.remove("lazy");
            imgObserver.unobserve(target);
            }
          });
        };

        lazyImg.forEach(function(image) {
          imgObserver.observe(image);
        });
      }
}