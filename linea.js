class Linea {
    constructor(x1, y1) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x1;
      this.y2 = y1;
      this.estaDibujando= true;
    }
  
    actualizar(x, y) {
      this.x2 = x;
      this.y2 = y;
    }
  
    public mostrar() {
      if (this.estaDibujando) {
        line(this.x1, this.y1, this.x2, this.y2);
      }
    }
  }