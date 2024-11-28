 <script>
        
      let first = document.getElementById("pop")
       let second = document.getElementById("pap");
       
      first.addEventListener("click", show)
      second.addEventListener("click", close)
      
      
      
      function show(){
          let nav = document.getElementById("nav")
          nav.style.display="block"
          first.style. display="none"
          second.style.display="block"
      }
      
      
      function close(){
          let nav = document.getElementById("nav")
          nav.style.display="none"
          first.style. display="block"
          second.style.display="none"
      }
      
      
      
    </script>