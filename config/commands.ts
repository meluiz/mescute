import type { CommandConfig } from 'App/Types'

/**
 * Represents the configuration for commands.
 */
const commands: CommandConfig = {
  // Set the prefix for commands
  prefix: '.',

  // Set the splitter for command arguments
  splitter: ' ',

  // Define the exception handling for commands
  exception: {
    /**
     * Function to handle the case when a command is not found.
     */
    notFound: () => {},
  },
}

export default commands
