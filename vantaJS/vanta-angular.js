 declare var VANTA: any;
 
 ngOnInit(): void {
    VANTA.WAVES({
      el: '#vanta-waves',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.0,
      minWidth: 100.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });
  }
