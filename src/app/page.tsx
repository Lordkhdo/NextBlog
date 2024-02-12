import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import Apresentaction from "@/components/Apresentaction/Apresentaction";

export default function Home() {
    return (
        <div>
            <Header />
            <Apresentaction />
        </div>
    );
}
