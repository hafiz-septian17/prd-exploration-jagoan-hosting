"use client"

import * as Icons from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { trainingSessions } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

type IconName = keyof typeof Icons;

const SessionIcon = ({ name, ...props }: { name: IconName } & React.ComponentProps<typeof Icons.Icon>) => {
  const Icon = Icons[name] as React.ElementType;
  if (!Icon) return null;
  return <Icon {...props} />;
};


export default function PelatihanPage() {
  const overallProgress = (trainingSessions.filter(s => s.status === 'selesai').length / trainingSessions.length) * 100;

  return (
    <div className="grid flex-1 items-start gap-4 md:gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Progres Pelatihan Anda</CardTitle>
          <CardDescription>Anda telah menyelesaikan {Math.round(overallProgress)}% dari keseluruhan program.</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={overallProgress} />
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trainingSessions.map((session) => (
          <Card key={session.id}>
            <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-md">
                    <SessionIcon name={session.icon as IconName} className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                    <CardTitle>{session.title}</CardTitle>
                    <CardDescription>{session.description}</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="grid gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Progres</span>
                    {session.status === 'selesai' && <Badge variant="default">Selesai</Badge>}
                    {session.status === 'sedang-berjalan' && <Badge variant="outline">Berjalan</Badge>}
                    {session.status === 'belum-dimulai' && <Badge variant="secondary">Belum Mulai</Badge>}
                </div>
                <Progress value={session.progress} aria-label={`${session.progress}% selesai`} />
            </CardContent>
            <CardFooter>
                {session.status === 'selesai' ? (
                    <Button variant="outline" className="w-full" disabled>
                        <Icons.CheckCircle className="mr-2 h-4 w-4" />
                        Selesai
                    </Button>
                ) : (
                    <Button className="w-full">
                        {session.status === 'sedang-berjalan' ? 'Lanjutkan Belajar' : 'Mulai Belajar'}
                        <Icons.ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
