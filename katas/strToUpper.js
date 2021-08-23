function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    for (var i = 0; i < dna.length; i++)
    {
      dna = dna.replace('T', 'U');
    }
    
    return dna;
  }

  String.prototype.isUpperCase = function() {
    return this.toUpperCase() == this;
  }

  String.prototype.isUpperCase = function() {
    return this.valueOf().toUpperCase() === this.valueOf();
};


String.prototype.isUpperCase  = function(_str){
    return this.split("").every(function(c){return c === c.toUpperCase();});
  }
  