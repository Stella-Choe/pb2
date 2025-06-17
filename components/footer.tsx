import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto py-4 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} AI & Informatics. All rights reserved.
            </p>

        </div>
      </div>

    </footer>
  )
}
