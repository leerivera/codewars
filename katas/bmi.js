// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height){
    const x = weight / height **2
    return x <= 18.5 ? 'Underweight' : x <= 25.0 ? 'Normal' : x <= 30.0 ? 'Overweight' : 'Obese'
 }

 function bmi(weight, height) {
    var result = weight/Math.pow(height,2) 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
    
  }

  function bmi(weight, height) {
    var formula = (weight / Math.pow(height, 2));
    switch (true) {
      case formula <=18.5:
      return 'Underweight';
      case formula <=25.0:
      return 'Normal';
      case formula <=30:
      return 'Overweight';
      default:
      return 'Obese';
      
    }
  }

  function bmi(weight, height) {
    // NOTE: ASC tuples array
    const types = [
      [18.5, "Underweight"],
      [25, "Normal"],
      [30, "Overweight"],
      [Number.MAX_SAFE_INTEGER, "Obese"],
    ];
    const bmi = weight / (height * height);
    
    return types.find((tuple) => bmi <= tuple[0])[1];
  }

  function bmi(weight, height) {
    const calc = (weight / height ** 2).toFixed(2);
    const index = ['Underweight', 'Normal', 'Overweight', 'Obese'];
  
    if (calc <= 18.5) return index[0];
    if (calc <= 25.0) return index[1];
    if (calc <= 30.0) return index[2];
    if (calc > 30.0) return index[3];
}