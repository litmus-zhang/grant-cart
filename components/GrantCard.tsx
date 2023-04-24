import { CardProps } from "@/pages";
import { Avatar, Badge, Button } from "@chakra-ui/react";
import Link from "next/link";

const GrantCard = (props: CardProps) => {

    const badge = props.link.includes('superteam.fun')
    return (
        <div className="flex flex-col justify-center items-center w-[300px] h-[300px] p-2 border-2 text-center pb-4 rounded shadow-md hover:border-purple-500 cursor-pointer">
                    <Avatar name={props.title} src={"https://cdn2.iconfinder.com/data/icons/charity-16/64/grant-financial-aid-support-donate-512.png"}
                    />
                <Badge colorScheme={badge ? "blue" : "cyan"}>{badge ? "Superteam" : "Others"}</Badge>
                <h1 className="text-xl font-bold  py-1">{props.title}</h1>
                <Link href={props.link} target="_blank">

                <Button colorScheme="purple" size={"md"}>
                    Apply Now 💫
                </Button>
            </Link>
        </div>
    );
};

export default GrantCard;