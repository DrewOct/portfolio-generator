const printProfileData = profileDataArr => {
    //This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }


  console.log('================');

// Is the same is this...
profileDataArr.forEach(profileItem => console.log(profileItem));
};
