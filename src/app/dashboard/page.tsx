import { auth, currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default async function Dashboard() {
  const { userId } = auth()
  const user = await currentUser()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.firstName}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Manage Tenancy</CardTitle>
            <CardDescription>Set up and manage your contractor profile</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/tenancy">Manage Tenancy</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>View and manage your current projects</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payments</CardTitle>
            <CardDescription>Track and manage your payments</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/payments">Manage Payments</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

