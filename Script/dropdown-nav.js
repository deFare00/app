document.querySelectorAll('.navbar-nav .dropdown').forEach(function(everydropdown){
    everydropdown.addEventListener('mouseover', function(e){
      let thisDropdown = this.querySelector('.dropdown-menu');
      thisDropdown.classList.add('show');
    });
    everydropdown.addEventListener('mouseout', function(e){
      let thisDropdown = this.querySelector('.dropdown-menu');
      thisDropdown.classList.remove('show');
    });
  });