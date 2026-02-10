const admin = [
    {
        id: 1,
        name: "Super Admin",
        email: "admin@example.com",
        password: "1234"
    }
];

const employees = [
    {
        id: 2,
        name: "Ali Khan",
        email: "employee1@example.com",
        password: "1234",
        taskCounts: { active: 3, newTask: 2, completed: 1, failed: 1 },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Refactor API Layer",
                taskDescription: "Convert existing REST calls to use Axios interceptors for global error handling.",
                taskDate: "2026-01-22",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Dependency Audit",
                taskDescription: "Check for deprecated npm packages and update package-lock.json.",
                taskDate: "2026-01-15",
                category: "Maintenance"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Database Indexing",
                taskDescription: "Optimize slow-running SQL queries by adding indexes to the 'Orders' table.",
                taskDate: "2026-01-25",
                category: "Backend"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Legacy IE Support",
                taskDescription: "Implement polyfills for CSS Grid in outdated browsers.",
                taskDate: "2026-01-10",
                category: "Frontend"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "CI/CD Pipeline",
                taskDescription: "Configure GitHub Actions to run automated tests on every push.",
                taskDate: "2026-01-21",
                category: "DevOps"
            }
        ]
    },

    {
        id: 3,
        name: "Sara Ahmed",
        email: "employee2@example.com",
        password: "1234",
        taskCounts: { active: 2, newTask: 1, completed: 2, failed: 1 },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Dark Mode implementation",
                taskDescription: "Add Tailwind dark mode classes to all landing page components.",
                taskDate: "2026-01-23",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Bug Fix: Navbar",
                taskDescription: "Resolve the overlapping menu issue on mobile devices.",
                taskDate: "2026-01-18",
                category: "Frontend"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Unit Testing",
                taskDescription: "Write Jest test cases for the Authentication helper functions.",
                taskDate: "2026-01-22",
                category: "QA"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Web3 Integration",
                taskDescription: "Attempt to connect MetaMask wallet to the user dashboard.",
                taskDate: "2026-01-05",
                category: "Research"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Documentation",
                taskDescription: "Update the README.md with the new environment setup steps.",
                taskDate: "2026-01-19",
                category: "Documentation"
            }
        ]
    },

    {
        id: 4,
        name: "Usman Raza",
        email: "employee3@example.com",
        password: "1234",
        taskCounts: { active: 4, newTask: 2, completed: 1, failed: 0 },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Cloud Migration",
                taskDescription: "Move assets from local storage to AWS S3 buckets.",
                taskDate: "2026-01-24",
                category: "Infrastructure"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "SEO Audit",
                taskDescription: "Identify and fix broken links and missing meta tags.",
                taskDate: "2026-01-22",
                category: "Marketing"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "New Feature: Chat",
                taskDescription: "Initialize Socket.io connection for the real-time support chat.",
                taskDate: "2026-01-26",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Logo Update",
                taskDescription: "Replace old SVG logos with the new 2026 branding versions.",
                taskDate: "2026-01-12",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Performance Profiling",
                taskDescription: "Run Lighthouse audits to improve page load speed.",
                taskDate: "2026-01-23",
                category: "QA"
            }
        ]
    },

    {
        id: 5,
        name: "Ayesha Noor",
        email: "employee4@example.com",
        password: "1234",
        taskCounts: { active: 2, newTask: 1, completed: 2, failed: 1 },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Auth Refactor",
                taskDescription: "Switch from JWT stored in LocalStorage to HttpOnly Cookies.",
                taskDate: "2026-01-24",
                category: "Security"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Server Patching",
                taskDescription: "Apply the latest security patches to the Ubuntu production server.",
                taskDate: "2026-01-14",
                category: "Infrastructure"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Analytics Dashboard",
                taskDescription: "Create a visual chart for weekly user signups using Chart.js.",
                taskDate: "2026-01-22",
                category: "Frontend"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Stripe Webhooks",
                taskDescription: "Debug the failing 500 error on the payment confirmation webhook.",
                taskDate: "2026-01-08",
                category: "Backend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Client Meeting",
                taskDescription: "Present the sprint demo to the stakeholders.",
                taskDate: "2026-01-19",
                category: "Management"
            }
        ]
    },

    {
        id: 6,
        name: "Hamza Sheikh",
        email: "employee5@example.com",
        password: "1234",
        taskCounts: { active: 3, newTask: 2, completed: 1, failed: 1 },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Mobile App Beta",
                taskDescription: "Distribute the latest APK to the internal testing group.",
                taskDate: "2026-01-25",
                category: "Mobile"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Folder Cleanup",
                taskDescription: "Organize the assets folder and delete unused image files.",
                taskDate: "2026-01-11",
                category: "Maintenance"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Accessibility Fix",
                taskDescription: "Add aria-labels to all icon-only buttons for screen readers.",
                taskDate: "2026-01-22",
                category: "Compliance"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "API Rate Limiting",
                taskDescription: "Implement rate limiting middleware to prevent brute force attacks.",
                taskDate: "2026-01-23",
                category: "Security"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Video Upload Fix",
                taskDescription: "Resolve the timeout issue occurring with large mp4 files.",
                taskDate: "2026-01-02",
                category: "Backend"
            }
        ]
    }
];


export const setLocalStorageData = () => {
    localStorage.setItem('employeeData', JSON.stringify(employees));
    localStorage.setItem('adminData', JSON.stringify(admin));
}

export const getLocalStorageData = () => {
    const employeeData = JSON.parse(localStorage.getItem('employeeData'));
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    return { adminData, employeeData };
}

