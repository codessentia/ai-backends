/**
 * ASCII Logo for AI Backend
 */

export function displayLogo() {
    const logo = `

                     █████╗ ██╗                                  
                    ██╔══██╗██║                                  
                    ███████║██║                                  
                    ██╔══██║██║                                  
                    ██║  ██║██║                                  
                    ╚═╝  ╚═╝╚═╝                                  
                                                                
       ██████╗  █████╗  ██████╗██╗  ██╗███████╗███╗   ██╗██████╗ ███████╗ 
       ██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔════╝████╗  ██║██╔══██╗██╔════╝ 
       ██████╔╝███████║██║     █████╔╝ █████╗  ██╔██╗ ██║██║  ██║███████╗ 
       ██╔══██╗██╔══██║██║     ██╔═██╗ ██╔══╝  ██║╚██╗██║██║  ██║╚════██║ 
       ██████╔╝██║  ██║╚██████╗██║  ██╗███████╗██║ ╚████║██████╔╝███████║ 
       ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝ 
                                                                
                  ∞ AI Backends Service v1.0 ∞                   
                     Powered by Bun & Hono                       

    `;

    const colors = {
        reset: '\x1b[0m',
        cyan: '\x1b[36m',
        yellow: '\x1b[33m',
        green: '\x1b[32m',
        magenta: '\x1b[35m',
    };

    // Display logo with colors
    console.log(colors.cyan + logo + colors.reset);
    
    // Display startup info
    console.log(colors.green + '    🚀 Starting AI Backend Service...' + colors.reset);
    console.log(colors.yellow + '    📡 Port: ' + (process.env.PORT || '3000') + colors.reset);
    console.log(colors.yellow + '    🌍 Environment: ' + (process.env.NODE_ENV || 'production') + colors.reset);
    console.log(colors.magenta + '    ⚡ Runtime: Bun' + colors.reset);
    console.log('    ' + '─'.repeat(60));
    console.log('');
}

export default displayLogo;
