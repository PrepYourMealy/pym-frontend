"use client"

import React, {useState, useRef, useEffect} from "react"
import {ArrowUp, RefreshCw} from "lucide-react"
import {Button} from "~/components/ui/button"
import {Textarea} from "~/components/ui/textarea"
import {Separator} from "~/components/ui/separator";

export function Prompt() {
    const [input, setInput] = useState("")
    const [regenerationsLeft, setRegenerationsLeft] = useState(3) // Start with 3 regenerations
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value.slice(0, 150))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.trim() && regenerationsLeft > 0) {
            console.log("Submitted:", input)
            setInput("")
            setRegenerationsLeft(prev => prev - 1)
        }
    }

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [input])

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white">
            <Separator className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-1" />
            <div className="p-2">
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                    <div className="relative">
                        <Textarea
                            ref={textareaRef}
                            value={input}
                            onChange={handleInputChange}
                            placeholder={regenerationsLeft > 0 ? "Neues Menu generieren..." : "No regenerations left"}
                            className="w-full resize-none pr-12 py-3 max-h-32 min-h-[52px] overflow-y-auto
                       bg-transparent rounded-xl
                       border-2 border-gray-400
                       focus:ring-0 focus:outline-none relative z-10"
                            disabled={regenerationsLeft === 0}
                        />
                        <Button
                            type="submit"
                            size="icon"
                            className="absolute bottom-1.5 right-1.5 h-8 w-8 rounded-lg bg-primary hover:bg-primary/90 z-20"
                            disabled={!input.trim() || regenerationsLeft === 0}
                        >
                            <ArrowUp className="h-4 w-4"/>
                            <span className="sr-only">Send message</span>
                        </Button>
                    </div>
                </form>
                <div className="flex justify-between items-center text-xs text-muted-foreground mt-1 px-2">
                    <div className="flex items-center">
                        <RefreshCw className="h-4 w-4 mr-1"/>
                        <span>{regenerationsLeft} regeneration{regenerationsLeft !== 1 ? 's' : ''} left</span>
                    </div>
                    <div>{input.length}/150 characters</div>
                </div>
            </div>
        </div>
    )
}