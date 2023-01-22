import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from "cors";
// import helmet from "helmet";

import { itemsRouter } from './items/items.router';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);  // 서버 종료
}

const PORT: number = parseInt(process.env.PORT as string, 10);
// env파일에서 받아온 PORT는 100% string이라 assertion쓴 모습
// 맨 뒤에 10은 10진수로 parseInt 해준다는건데 안해줘도 되지만 ie에서 에러 난다고 함

const app = express();

// app.use(helmet());
app.use(cors());

app.use(express.json());
// express.json 내장 미들웨어 사용으로 req body를 JSON 형식으로 분석 가능

app.use('/api/menu/items', itemsRouter);

app.use(errorHandler);
app.use(notFoundHandler);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hi!!');
// });

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
})