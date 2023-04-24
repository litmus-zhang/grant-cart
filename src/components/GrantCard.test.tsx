import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import GrantCard from './GrantCard'
import { CardProps } from '@/pages'

test("Grant Card", () => {
    const props: CardProps = {
        link: "www.google.com",
        title: "Google Grant"
    }
    render(<GrantCard {...props} />)
    const main = screen.getByText("Google Grant")

    expect(main).toBe("Google Grant")
})