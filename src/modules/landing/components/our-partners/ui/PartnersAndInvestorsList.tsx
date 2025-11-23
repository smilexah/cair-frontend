import Image from "next/image";
import {Container} from "@/shared/components/Container";

const companies = [
    {
        name: "Qcloudy",
        logo: "/companies/qcloudy.png",
    },
    {
        name: "Freedom",
        logo: "/companies/freedom-holding.png",
    },
    {
        name: "MyCar",
        logo: "/companies/mycar.png",
    },
    {
        name: "Relog",
        logo: "/companies/relog.png",
    },
    {
        name: "racoonAi",
        logo: "/companies/racoonAi.png",
    },
    {
        name: "Kcell",
        logo: "/companies/kcell.png",
    },
    {
        name: "centerCredit",
        logo: "/companies/centercredit.png",
    },
    {
        name: "Wonder",
        logo: "/companies/wonderFBO.png",
    }
];



export const PartnersAndInvestorsList = () => {
    return (
        <section className={"bg-white my-10 py-10"}>
            <Container>
                <div className={"flex flex-row justify-between"}>
                    {companies.map((companie, index) => (
                        <Image
                            key={index}
                            width={80}
                            height={80}
                            src={companie.logo}
                            alt={companie.name}
                            className="object-contain"

                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}