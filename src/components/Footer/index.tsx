import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import { TfiGithub } from "react-icons/tfi";

export const Footer = () => {
    return (
        <footer className="mt-4">
            <ul className="flex item-center justify-center gap-1 text-muted-foreground">
                <li>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="https://www.instagram.com/rafael_breschi"
                                target="_blank"
                            >
                                <div
                                    className="p-2 dark:hover:bg-zinc-900  rounded-sm cursor-pointer"
                                >
                                    <BiLogoInstagramAlt />
                                </div>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Instagram</p>
                        </TooltipContent>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="https://github.com/rafaelRizzo"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                <div
                                    className="p-2 dark:hover:bg-zinc-900  rounded-sm cursor-pointer"
                                >
                                    <TfiGithub />
                                </div>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Github</p>
                        </TooltipContent>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="https://www.linkedin.com/in/rafael-rizzo-breschi-b02547216/"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                <div
                                    className="p-2 dark:hover:bg-zinc-900  rounded-sm cursor-pointer"
                                >
                                    <FaLinkedin />
                                </div>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Linkedin</p>
                        </TooltipContent>
                    </Tooltip>
                </li>
            </ul>

            <i className="text-xs text-center flex w-full items-center justify-center">© 2025 Rafael Rizzo. Todos os direitos reservados.</i>
        </footer>
    )
}