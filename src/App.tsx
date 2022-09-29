import { json } from "stream/consumers";
import Test from "./Test";
import Container from "./Container";
import styled, {createGlobalStyle} from "styled-components";

// 전역 스타일 지정
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HBIOS-SYS';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/HBIOS-SYS.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  * {
    font-family: 'HBIOS-SYS';
  }
  body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
`

function App() {
  function sumArray(numbers:number[]): number{
    return numbers.reduce((acc, current)=> acc+current,0);
  }

  const total = sumArray([1,2,3,4,5]);

  interface Shape {
    getArea(): number;
  }

  class Circle implements Shape {

    constructor(public radius: number){
      this.radius = radius;
    }

    getArea(): number {
      return this.radius * this.radius * Math.PI;
    }
  }

  class Rectangle implements Shape {
    constructor(public width: number, public height: number){
      this.width=width;
      this.height=height;
    }
    getArea(): number {
      return this.width*this.height;
    }
  }

  const shapes: Shape[] = [new Circle(5), new Rectangle(10,3)]

  interface Person {
    name: string;
    age?: number;
  }
  interface Developer extends Person {
    skills: string[];
  }

  const person: Person = {
    name: '정사람',
    age: 23
  };

  const expert: Developer = {
    name: "정사람",
    skills: ['js','react']
  };

  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  }

  return (
    <>
      {/* {total}
      {
        shapes.forEach(shape => {
          console.log(shape.getArea());
        })
      }
      <Test name="Hellos" mark="mark" onClick={onClick}/> */}
      <GlobalStyle/>
      <Container/>
    </>
  );
}

export default App;
