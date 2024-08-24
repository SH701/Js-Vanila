const quotes = [
  {
    quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
    author: "-원스턴 처칠-",
  },
  {
    quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
    author: "-월트 디즈니-",
  },
  {
    quote: "남들이 당신에게 던진 벽돌들로 기반을 쌓을 수 있어야 성공한다.",
    author: "-데이비드 브링클리-",
  },
  {
    quote:
      "괴로운 시련처럼 보이는 것이 뜻밖의 좋은 일일 때가 많다.",
    author: "-오스카 와일드-",
  },
  {
    quote:
      "위대한 것으로 향하기 위해 좋은 것을 포기하는 걸 두려워하지 마라.",
    author: "-존 록펠러-",
  },
  {
    quote:
      "모든 진보는 익숙한 영역이 아닌 곳에서 이뤄진다.",
    author: "-마이클 존 보박-",
  },
  {
    quote:
      "성공은 매일 반복한 작은 노력들의 합이다.",
    author: "-로버트 콜리어-",
  },
  {
    quote:
      "나는 내가 노력할수록 운이 좋아진다는 걸 발견했다",
    author: "-토마스 제퍼슨-",
  },
  {
    quote:
      "혁신이 지도자와 추종자를 가른다.",
    author: "-스티브 잡스-",
  },
  {
    quote:
      "마치지 않고 죽어도 되는 일만 내일로 미뤄라.",
    author: "-파블로 피카소-",
  },
  
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysquote.quote;
author.innerText = todaysquote.author;

