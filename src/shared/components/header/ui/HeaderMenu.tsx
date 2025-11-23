
import { Button } from "@/shared/ui/button";
import { Link } from "@/shared/lib/i18n/navigation";

interface Props {
    className?: string;
}

export const HeaderMenu = ({ className }: Props) => {
    return (
        <section className={`flex items-center gap-3 ${className}`}>
            <Link href="/projects">
                <Button variant="ghost" className="transition-all duration-300 hover:scale-105">
                    Projects
                </Button>
            </Link>
            <Link href="/team">
                <Button variant="ghost" className="transition-all duration-300 hover:scale-105">
                    Team
                </Button>
            </Link>
            <Button variant="outline" className="transition-all duration-300 hover:scale-105">
                Sign in
            </Button>
            <Button className="transition-all duration-300 hover:scale-105">
                <a
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc4py_BCIXQ_4HhSM79TDihBoIdpSBNaGJkdjHEHLc7pW58-w/viewform"
                >
                    Join Us
                </a>
            </Button>
        </section>
    );
};
