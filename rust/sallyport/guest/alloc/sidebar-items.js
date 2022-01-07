initSidebarItems({"struct":[["CommittedCall","Committed call, which holds allocated reference to opaque committed value."],["CommittedSyscall","Committed syscall, which holds allocated reference to syscall return values within the block and opaque committed value."],["InOutRef","Reference to an allocated input-output segment."],["InRef","Reference to an allocated input segment."],["Input","Allocated input."],["OutRef","Reference to an allocated output segment."],["Output","Allocated output."],["StagedCall","Staged call, which holds allocated reference to item header within the block and opaque staged value."],["StagedSyscall","Staged syscall, which holds allocated reference to syscall item within the block and opaque staged value."]],"trait":[["Allocator","Allocator in stage phase."],["Call","A generic call, which can be allocated within the block."],["Collect","Something that can be collected in collection phase."],["Collector","Allocator in collection phase."],["Commit","Something that can be committed in commit phase."],["CommitPassthrough","Something, for which [`Commit::commit`] is an identity function."],["Committer","Allocator in commit phase."],["PassthroughSyscall","Trait implemented by allocatable syscalls, which are passed through directly to the host and do not require custom handling logic."],["Syscall","A generic syscall, which can be allocated within the block."]]});