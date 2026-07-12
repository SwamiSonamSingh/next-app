import { Card } from "@/app/Card/card";
import Link from "next/link";

export default function ActiveNotifications(){
    return(
        <Card>
            <div>Active notifications</div>
            <Link href='/dashboard' className="text-blue-500 ml-1">Got to notifications</Link>
        </Card>
    )
}