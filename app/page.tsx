"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-context-menu";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";


export default function Home() {
  return (
    <div className="p-4">
    <Card className="bg-sky-500">
      <CardHeader>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex space-x-2">
          <div className="flex flex-col w-full">
        <Label>名前</Label>
          <Input className="w-full" placeholder="名前" />
          </div>
          <div className="flex flex-col w-16">
        <Label>年齢</Label>
          <Input className="w-16" placeholder="年齢" />
          </div>
          <div className="flex flex-col w-16">
        <Label>性別</Label>
        <Input className="w-16" placeholder="性別" />
          </div>
        </div>
        <div className="flex space-x-2">
        <div className="flex flex-col">
        <Label>好きなバンド一覧的な</Label>
        <Textarea placeholder="Type your message here." />
        </div>
        <div className="flex flex-col">
        <Label>参戦予定的な</Label>
        <Textarea placeholder="Type your message here." />
        </div>
        </div>
        <div>
        <Label>自由記載</Label>
        <Textarea placeholder="Type your message here." />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex bg-red-500 w-full justify-center">{"a"}</div>
      </CardFooter>
    </Card>
    </div>
  )
}