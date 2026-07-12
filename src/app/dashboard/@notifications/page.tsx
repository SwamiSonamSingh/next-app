import { Card } from "@/app/Card/card";
import Link from "next/link";

export default function Notification(){
    return(
        <Card>
            <div>This is notification widget</div>
            <Link className='text-blue-700 ml-1' href='/dashboard/active'>Got to active notifications</Link>
        </Card>
    )
}