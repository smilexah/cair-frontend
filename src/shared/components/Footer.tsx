import {Container} from "@/shared/components/Container";
import Image from "next/image";
export const Footer = () => {
    return (
        <footer className={`bg-black`}>
            <Container className={"flex flex-row max-[768px]:flex-col max-[768px]:gap-10 justify-between items-start pt-15 pb-20"}>
                <Image
                    width={128}
                    height={100}
                    src="/LogoSecond.svg"
                    alt="logo"
                />
                <div className={"flex flex-col justify-start  gap-1 "}>
                    <h4 className={"font-semibold text-2xl"}>Contacts</h4>
                    <p className={"font-light text-sm opacity-80"}>Number: 8777777777777</p>
                    <p className={"font-light text-sm opacity-80"}>Address: Kazakhstan, Almaty region, Kaskelen</p>
                </div>
                <div className={"flex flex-col justify-center gap-1 "}>
                    <h4 className={"font-semibold text-2xl"}>Have questions? Write to us</h4>
                    <p className={"font-light text-sm opacity-80"}>Email: tagankhozhaev@gmail.com</p>
                </div>
            </Container>
        </footer>
    )
}