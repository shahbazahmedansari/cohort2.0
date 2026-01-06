// promise

function createPromise() {
  let prm = new Promise((resolve, reject) => {
    resolve();
    // reject();
  });

  return prm;
}

// createPromise().then(() => console.log("Promise resolved")).catch(() => console.error("Promise Rejected"));

// async await

async function getRandomUser() {
  let raw = await fetch(`https://randomuser.me/api/`);
  let data = await raw.json();
  console.log(data);
}

// getRandomUser();

function getRandomNumber() {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10);
    if (num < 5) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

async function getNum() {
  let val = await getRandomNumber();
  console.log(val);
}

// getNum();

// Scenario 1 — Weather Dashboard with Error Handling

async function getWeather(city) {
  try {
    let apikey = `4708e7920b65e92acd9408f81f5ec0f9`;

    let rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);

    if (!rawData.ok) {
      throw new Error("City not found or Something went wrong");
    }

    let data = await rawData.json();

    if (data.main.temp < 0) {
      console.warn(`Too cold out here... ${data.main.temp}°C`);
    } else if (data.main.temp > 32) {
      console.warn(`Too hot out there... ${data.main.temp}°C`);
    } else {
      console.log(`${data.main.temp}°C`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

// getWeather("New York");

// Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

const userEmailList = [
  "tyson@gmail.com",
  "kai@gmail.com",
  "max@gmail.com",
  "ray@gmail.com",
  "daichi@gmail.com",
];

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 5);

    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);

      if (probability < 5) reject();
      else resolve();
    }, time * 1000);
  });
}

function sendEmails(userList) {
  userList.map((email) => {
    sendEmail(email)
      .then(() => console.log("Email sent successfully"))
      .catch((err) => console.warn("Email not sent"));
  });
}

sendEmails(userEmailList);



