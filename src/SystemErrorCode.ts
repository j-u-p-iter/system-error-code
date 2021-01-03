/**
 * System errors codes commonly-encountered
 *   when writing a NodeJS program
 */
export enum SystemErrorCode {
  /**
   * ENOENT (No such file or directory): Commonly raised by fs operations
   *   to indicate that a component of the specified pathname does not exist.
   *   No entity (file or directory) could be found by the given path.
   */
  NO_FILE_OR_DIRECTORY = "ENOENT"
}
