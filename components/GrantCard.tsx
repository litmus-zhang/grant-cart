import { CardProps } from "@/pages";
import { Avatar, Badge, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const GrantCard = (props: CardProps) => {

    const badge = props.link.includes('superteam.fun')
    return (
        <div className="group p-2 border w-72 h-72 flex flex-col justify-center items-center text-center pb-4 rounded shadow-sm hover:border-purple-500 cursor-pointer">
            <Link href={props.link} target="_blank">
                <div className="">
                    <Avatar name={props.title} src={"https://cdn2.iconfinder.com/data/icons/charity-16/64/grant-financial-aid-support-donate-512.png"}
                    />
                </div>
                <Badge colorScheme={badge ? "blue" : "cyan"}>{badge ? "Superteam" : "Others"}</Badge>
                <h1 className="text-xl font-bold  py-1">{props.title}</h1>
                <Button colorScheme="purple" size={"md"}>
                    Apply Now 💫
                </Button>
            </Link>
        </div>
    );
};

export default GrantCard;