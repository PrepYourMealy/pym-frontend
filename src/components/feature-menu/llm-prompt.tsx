'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Textarea } from "~/components/ui/textarea"
import { Button } from "~/components/ui/button"
import { ArrowUpIcon } from "lucide-react"

export function LlmPrompt({ maxInteractions = 5 }: { maxInteractions?: number }) {
    const [prompt, setPrompt] = useState('')
    const [interactionsLeft, setInteractionsLeft] = useState(maxInteractions)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [prompt])

    const handleSubmit = () => {
        if (interactionsLeft > 0 && prompt.trim()) {
            console.log('Sending prompt:', prompt)
            setInteractionsLeft(prev => prev - 1)
            setPrompt('')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
        }
    }

    return (
        <div className="relative bottom-0 w-full bg-gradient-to-t from-background to-background/0 py-6">
            <div className="absulute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4">
                <div className="relative">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-lg blur"></div>
                    <Textarea
                        ref={textareaRef}
                        placeholder="Send a message"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value.slice(0, 150))}
                        onKeyDown={handleKeyDown}
                        disabled={interactionsLeft === 0}
                        className="pr-12 resize-none max-h-36 rounded-lg border-0 bg-background/80 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 ease-in-out"
                        rows={1}
                    />
                    <Button
                        size="icon"
                        onClick={handleSubmit}
                        disabled={interactionsLeft === 0 || !prompt.trim()}
                        className="absolute right-2 bottom-2 h-8 w-8 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 ease-in-out"
                    >
                        <ArrowUpIcon className="h-4 w-4"/>
                        <span className="sr-only">Send message</span>
                    </Button>
                </div>
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span className="transition-all duration-300 ease-in-out">
                {150 - prompt.length}/150
            </span>
                    <span className="font-semibold transition-all duration-300 ease-in-out">
                {interactionsLeft} interaction{interactionsLeft !== 1 ? 's' : ''} left
            </span>
                </div>
            </div>
        </div>
    )
}