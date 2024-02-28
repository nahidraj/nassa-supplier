$(function () {
  $(document).ready(function () {
    // Hide all main_info initially
    $(".accordion_items .main_info").hide();

    // Show main_info for the first accordion item
    $(".accordion_items:nth-child(1) .main_info").show();

    // Add click event to toggle visibility without animation
    $(".collapse_arrow").click(function () {
      // Find the closest .accordion_items and toggle its .main_info
      var mainInfo = $(this).closest(".accordion_items").find(".main_info");
      mainInfo.toggle();

      // Toggle icon class for the button
      var icon = $(this).find("i");
      icon.toggleClass("fa-angle-down fa-angle-up");

      // Hide other main_info elements without animation
      $(".accordion_items .main_info").not(mainInfo).hide();
    });
  });

  // fixed header part js
  $(window).scroll(function () {
    let scrolling = $(this).scrollTop();
    if (scrolling > 0) {
      $(".top-header").addClass("fixed");
    } else {
      $(".top-header").removeClass("fixed");
    }
  });

  // dropdown profile js
  let Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    let links = this.el.find(".link");
    // Evento
    links.on(
      "click",
      {
        el: this.el,
        multiple: this.multiple,
      },
      this.dropdown
    );
  };

  Accordion.prototype.dropdown = function (e) {
    let $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
    }
  };

  let accordion = new Accordion($("#accordion"), false);

  // collapsed sidebar js
  $(".control-bar i").click(function () {
    $("body").toggleClass("collapsed-menu");
  });

  $(".mobile-control-bar i").click(function () {
    $(".navigation-body").addClass("show-mobile-sidebar");
    body.style.overflow = "hidden";
  });

  $(".mobile-control-bar i").click(function () {
    $(".toggle-overlay").addClass("show-toggle-overlay");
    body.style.overflow = "hidden";
  });

  $(".close-mobile-menu i").click(function () {
    $(".navigation-body").removeClass("show-mobile-sidebar");
    body.style.overflow = "auto";
  });

  $(".close-mobile-menu i").click(function () {
    $(".toggle-overlay").removeClass("show-toggle-overlay");
    body.style.overflow = "auto";
  });

  $(".toggle-overlay").click(function () {
    $(".toggle-overlay").removeClass("show-toggle-overlay");
    body.style.overflow = "auto";
  });

  $(".toggle-overlay").click(function () {
    $(".navigation-body").removeClass("show-mobile-sidebar");
    body.style.overflow = "auto";
  });

  // Request full screen js
  // const arrows = document.querySelector(".fa-arrows-alt");
  // const body = document.querySelector("body");

  // const toggleFullscreen = () => {
  //   if (document.fullscreenElement) document.exitFullscreen();
  //   else body.requestFullscreen();
  // };

  // arrows.addEventListener("click", toggleFullscreen);
  // const onChange = () => {
  //   body.className = document.fullscreenElement ? "fullscreen" : "";
  // };
  // document.addEventListener("fullscreenchange", onChange);

  // couter up js
  $(".counter").counterUp({
    delay: 30,
    time: 2000,
  });

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  // two menu hide show js
  // let top_navbar = document.querySelector(".top-navbar");
  // let navigation_body = document.querySelector(".navigation-body");
  // let left_title = document.querySelector(".left-title");
  // let main_content_body = document.querySelector(".main-content-body");

  // left_title.addEventListener("click", () => {
  //   top_navbar.classList.toggle("active-navbar");
  //   navigation_body.classList.toggle("active-navigation-body");
  //   main_content_body.classList.toggle("margin-none")
  // })

  // const ctx = document.getElementById('myChart');
  // new Chart(ctx, {
  //   type: 'pie',
  //   data: {
  //     labels: ['Transfer', 'Leave', 'Proceed', 'Marriage', 'Absent'],
  //     datasets: [{
  //       label: '',
  //       data: [20, 10, 30, 50, 20, ],
  //       borderWidth: 1,
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });

  // const ctx1 = document.getElementById('myChart1');
  // new Chart(ctx1, {
  //   type: 'bar',
  //   data: {
  //     labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
  //     datasets: [{
  //       label: '',
  //       data: [20, 10, 30, 50, 20, ],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });

  // const ctx3 = document.getElementById('myChart3');
  // new Chart(ctx3, {
  //   type: 'pie',
  //   data: {
  //     labels: ['Leave (A)', 'Transfer (B)', 'TY Duty (C)'],
  //     datasets: [{
  //       label: '',
  //       data: [20, 10, 30],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });

  // const ctx4 = document.getElementById('myChart4');
  // new Chart(ctx4, {
  //   type: 'bar',
  //   data: {
  //     labels: ['Haji Mahsin', 'Titumir', 'DNST', "DNIT"],
  //     datasets: [{
  //       label: '',
  //       data: [20, 10, 30, 50],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });
});
