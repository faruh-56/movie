localStorage.setItem('myBirthDate', '26.11.2005')
  const myPhoneNumber = ['998978143400']
  localStorage.setItem('myPhoneNumber', myPhoneNumber)

  const myData = {
    age: 16,
    sex: 'male',
    faceitElo: 2568
  }
  localStorage.setItem('myData', JSON.stringify(myData))

  const cs = {
    premier: 20000,
    experience: '4k hours',
    faceitElo: 2568,
    teams: ['BAZZ', 'Wakanda', 'Refresh']
  }

  localStorage.setItem('cs', JSON.stringify(cs))

  let myDataJSON = localStorage.getItem('myData')
  let myDatas = JSON.parse(myDataJSON)
  myDatas.sex[1]
  console.log(myDatas.sex);
