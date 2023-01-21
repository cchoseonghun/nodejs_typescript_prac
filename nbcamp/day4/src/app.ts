// const puppeteer = require('puppeteer');
// const fs = require('fs');

import puppeteer from 'puppeteer';
import fs from 'fs';

interface ICard {
  id: string;
  image: string;
  name: string;
  details: string;
}

async function scrape(): Promise<ICard[]> {
  try {
    // 크로미움으로 브라우저 런치
    const browser = await puppeteer.launch();

    // 새 페이지 생성
    const page = await browser.newPage();

    // 링크로 페이지 이동
    await page.goto('http://127.0.0.1:5555/nbcamp/day3_pokemon/index.html');

    await page.waitForFunction(
      () => {
        const cardId = document.querySelector('.card:last-child .card--id');
        return cardId && cardId.textContent === '#100';
        // 100번째 포켓몬이 로드되어 해당 태그의 textContent === #100의 결과가 true면 wait 종료 (해당 페이지가 동적으로 생성되기 때문)
          

      }, { timeout: 10000 } // 5000초 보다 낮으면 어케 되는지 테스트
    );

    const cards = await page.$$('.card');  // $$는 document.querySelectorAll의 숏컷
    
    console.log(cards.length);
    const data: ICard[] = [];

    for (const card of cards) {
      const id = await card.$eval(".card--id", (el) => el.textContent);
      const image = await card.$eval(".card--image", (el) => el.getAttribute("src"));
      const name = await card.$eval(".card--name", (el) => el.textContent);
      const details = await card.$eval(".card--details", (el) => el.textContent);

      if (id && image && name && details) {
        data.push({ id, image, name, details });
      } else {
        console.log('없는 값이 존재');
        return [];
      }
    }

    await page.close();
    await browser.close();

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

scrape()
  .then((data) => {
    fs.writeFile("pokemon.json", JSON.stringify(data), "utf8", (error: Error) => {
      if (error) {
        console.log("파일 생성 중 에러 발생.");
        return console.log(error);
      }
      console.log("파일 생성 완료!");
    });
  })
  .catch((error) => console.log(error));