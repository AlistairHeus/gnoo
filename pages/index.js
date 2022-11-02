import { Text, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Phone from "../components/Phone/Phone";
import { Section } from "../components/Section";
import styles from "../styles/Home.module.css";
import state from "../components/state/state";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const HtmlContent = ({ position }) => {
  const phoneRef = useRef(null);
  // const headingRef = useRef(null);

  // let tweenTarget = null;

  const [phonePosition, setPhonePosition] = useState(() => ({
    x: 0,
    y: -300,
    z: 0,
  }));
  const [phoneScale, setPhoneScale] = useState(0.01);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".title", { y: 50, duration: 1 });
  }, []);

  // useEffect(() => {
  //   tl.reversed(!toggle);
  // }, []);

  return (
    // <Section>
    <group>
      <Phone phoneRef={phoneRef} position={phonePosition} scale={phoneScale} />

      {/* <Phone /> */}

      <Html fullscreen>
        <div className="container">
          <h1 className="title">Discover top products curated by experts</h1>
        </div>
      </Html>
    </group>
    // </Section>
  );
};

export default function Home() {
  const domContent = useRef(null);

  return (
    <div className={styles.container}>
      <Header />
      <Canvas>
        <HtmlContent domContent={domContent} />

        {/* <HtmlContent /> */}
        {/*  */}
      </Canvas>
    </div>
  );
}
