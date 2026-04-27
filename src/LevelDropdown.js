import { DropdownMenu } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";


const LevelDropdown = ({ currentLevel, selectLevel, maxLevels, handleReset }) => (
    <DropdownMenu.Root className="DropdownMenuRoot">
        <DropdownMenu.Trigger asChild>
            <button className="IconButton level_dropdown_button">
                Level {currentLevel + 1}
                <span className="offscreen">, open level selector</span>
                <ChevronDownIcon />
            </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
            <DropdownMenu.Content className="DropdownMenuContent level_dropdown" sideOffset={12}>
                <DropdownMenu.Group className="level_dropdown_items">
                    {Array.from({ length: maxLevels }, (_, i) => (
                        <DropdownMenu.Item className="DropdownMenuItem"
                            key={i}
                            value={i}
                            onSelect={() => selectLevel(i)}
                            aria-label={`Level ${i + 1}`}
                        >
                            {i + 1}
                        </DropdownMenu.Item>
                    ))}
                </DropdownMenu.Group>
                <button
                    aria-label="Reset Game"
                    type="button"
                    className="reset_button"
                    onClick={() => {
                        const confirmed = window.confirm("Are you sure you want to reset?\n\nThis will clear your progress and you will be sent to the beginning of the game.");
                        if (confirmed) handleReset();
                    }}>Reset</button>
                <DropdownMenu.Arrow />
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
    </DropdownMenu.Root >
);

export default LevelDropdown;
