import { useEffect } from "react";

import { useProjectModal } from "@/store/useProjectModal";

const SetupPage: React.FC = () => {
    const [isOpen, onOpen] = useProjectModal((state) => [state.isOpen, state.onOpen]);

    useEffect(() => {
        if (!isOpen) onOpen()
    }, [isOpen, onOpen])

    return null
}

export default SetupPage