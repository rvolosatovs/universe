initSidebarItems({"fn":[["abort","Aborts the execution of the process."],["add_with_overflow","Performs checked integer addition."],["arith_offset","Calculates the offset from a pointer, potentially wrapping."],["assert_inhabited","A guard for unsafe functions that cannot ever be executed if `T` is uninhabited: This will statically either panic, or do nothing."],["assert_uninit_valid","A guard for unsafe functions that cannot ever be executed if `T` has invalid bit patterns: This will statically either panic, or do nothing."],["assert_zero_valid","A guard for unsafe functions that cannot ever be executed if `T` does not permit zero-initialization: This will statically either panic, or do nothing."],["assume","Informs the optimizer that a condition is always true. If the condition is false, the behavior is undefined."],["atomic_and","Bitwise and with the current value, returning the previous value."],["atomic_and_acq","Bitwise and with the current value, returning the previous value."],["atomic_and_acqrel","Bitwise and with the current value, returning the previous value."],["atomic_and_rel","Bitwise and with the current value, returning the previous value."],["atomic_and_relaxed","Bitwise and with the current value, returning the previous value."],["atomic_cxchg","Stores a value if the current value is the same as the `old` value."],["atomic_cxchg_acq","Stores a value if the current value is the same as the `old` value."],["atomic_cxchg_acq_failrelaxed","Stores a value if the current value is the same as the `old` value."],["atomic_cxchg_acqrel","Stores a value if the current value is the same as the `old` value."],["atomic_cxchg_acqrel_failrelaxed","Stores a value if the current value is the same as the `old` value."],["atomic_cxchg_failacq","Stores a value if the current value is the same as the `old` value."],["atomic_cxchg_failrelaxed","Stores a value if the current value is the same as the `old` value."],["atomic_cxchg_rel","Stores a value if the current value is the same as the `old` value."],["atomic_cxchg_relaxed","Stores a value if the current value is the same as the `old` value."],["atomic_cxchgweak","Stores a value if the current value is the same as the `old` value."],["atomic_cxchgweak_acq","Stores a value if the current value is the same as the `old` value."],["atomic_cxchgweak_acq_failrelaxed","Stores a value if the current value is the same as the `old` value."],["atomic_cxchgweak_acqrel","Stores a value if the current value is the same as the `old` value."],["atomic_cxchgweak_acqrel_failrelaxed","Stores a value if the current value is the same as the `old` value."],["atomic_cxchgweak_failacq","Stores a value if the current value is the same as the `old` value."],["atomic_cxchgweak_failrelaxed","Stores a value if the current value is the same as the `old` value."],["atomic_cxchgweak_rel","Stores a value if the current value is the same as the `old` value."],["atomic_cxchgweak_relaxed","Stores a value if the current value is the same as the `old` value."],["atomic_fence","An atomic fence."],["atomic_fence_acq","An atomic fence."],["atomic_fence_acqrel","An atomic fence."],["atomic_fence_rel","An atomic fence."],["atomic_load","Loads the current value of the pointer."],["atomic_load_acq","Loads the current value of the pointer."],["atomic_load_relaxed","Loads the current value of the pointer."],["atomic_load_unordered",""],["atomic_max","Maximum with the current value using a signed comparison."],["atomic_max_acq","Maximum with the current value using a signed comparison."],["atomic_max_acqrel","Maximum with the current value using a signed comparison."],["atomic_max_rel","Maximum with the current value using a signed comparison."],["atomic_max_relaxed","Maximum with the current value."],["atomic_min","Minimum with the current value using a signed comparison."],["atomic_min_acq","Minimum with the current value using a signed comparison."],["atomic_min_acqrel","Minimum with the current value using a signed comparison."],["atomic_min_rel","Minimum with the current value using a signed comparison."],["atomic_min_relaxed","Minimum with the current value using a signed comparison."],["atomic_nand","Bitwise nand with the current value, returning the previous value."],["atomic_nand_acq","Bitwise nand with the current value, returning the previous value."],["atomic_nand_acqrel","Bitwise nand with the current value, returning the previous value."],["atomic_nand_rel","Bitwise nand with the current value, returning the previous value."],["atomic_nand_relaxed","Bitwise nand with the current value, returning the previous value."],["atomic_or","Bitwise or with the current value, returning the previous value."],["atomic_or_acq","Bitwise or with the current value, returning the previous value."],["atomic_or_acqrel","Bitwise or with the current value, returning the previous value."],["atomic_or_rel","Bitwise or with the current value, returning the previous value."],["atomic_or_relaxed","Bitwise or with the current value, returning the previous value."],["atomic_singlethreadfence","A compiler-only memory barrier."],["atomic_singlethreadfence_acq","A compiler-only memory barrier."],["atomic_singlethreadfence_acqrel","A compiler-only memory barrier."],["atomic_singlethreadfence_rel","A compiler-only memory barrier."],["atomic_store","Stores the value at the specified memory location."],["atomic_store_rel","Stores the value at the specified memory location."],["atomic_store_relaxed","Stores the value at the specified memory location."],["atomic_store_unordered",""],["atomic_umax","Maximum with the current value using an unsigned comparison."],["atomic_umax_acq","Maximum with the current value using an unsigned comparison."],["atomic_umax_acqrel","Maximum with the current value using an unsigned comparison."],["atomic_umax_rel","Maximum with the current value using an unsigned comparison."],["atomic_umax_relaxed","Maximum with the current value using an unsigned comparison."],["atomic_umin","Minimum with the current value using an unsigned comparison."],["atomic_umin_acq","Minimum with the current value using an unsigned comparison."],["atomic_umin_acqrel","Minimum with the current value using an unsigned comparison."],["atomic_umin_rel","Minimum with the current value using an unsigned comparison."],["atomic_umin_relaxed","Minimum with the current value using an unsigned comparison."],["atomic_xadd","Adds to the current value, returning the previous value."],["atomic_xadd_acq","Adds to the current value, returning the previous value."],["atomic_xadd_acqrel","Adds to the current value, returning the previous value."],["atomic_xadd_rel","Adds to the current value, returning the previous value."],["atomic_xadd_relaxed","Adds to the current value, returning the previous value."],["atomic_xchg","Stores the value at the specified memory location, returning the old value."],["atomic_xchg_acq","Stores the value at the specified memory location, returning the old value."],["atomic_xchg_acqrel","Stores the value at the specified memory location, returning the old value."],["atomic_xchg_rel","Stores the value at the specified memory location, returning the old value."],["atomic_xchg_relaxed","Stores the value at the specified memory location, returning the old value."],["atomic_xor","Bitwise xor with the current value, returning the previous value."],["atomic_xor_acq","Bitwise xor with the current value, returning the previous value."],["atomic_xor_acqrel","Bitwise xor with the current value, returning the previous value."],["atomic_xor_rel","Bitwise xor with the current value, returning the previous value."],["atomic_xor_relaxed","Bitwise xor with the current value, returning the previous value."],["atomic_xsub","Subtract from the current value, returning the previous value."],["atomic_xsub_acq","Subtract from the current value, returning the previous value."],["atomic_xsub_acqrel","Subtract from the current value, returning the previous value."],["atomic_xsub_rel","Subtract from the current value, returning the previous value."],["atomic_xsub_relaxed","Subtract from the current value, returning the previous value."],["bitreverse","Reverses the bits in an integer type `T`."],["black_box","See documentation of `std::hint::black_box` for details."],["breakpoint","Executes a breakpoint trap, for inspection by a debugger."],["bswap","Reverses the bytes in an integer type `T`."],["caller_location","Gets a reference to a static `Location` indicating where it was called."],["ceilf32","Returns the smallest integer greater than or equal to an `f32`."],["ceilf64","Returns the smallest integer greater than or equal to an `f64`."],["const_allocate","Allocate at compile time. Should not be called at runtime."],["const_eval_select","Selects which function to call depending on the context."],["const_eval_select_ct",""],["copy","Copies `count * size_of::<T>()` bytes from `src` to `dst`. The source and destination may overlap."],["copy_nonoverlapping","Copies `count * size_of::<T>()` bytes from `src` to `dst`. The source and destination must not overlap."],["copysignf32","Copies the sign from `y` to `x` for `f32` values."],["copysignf64","Copies the sign from `y` to `x` for `f64` values."],["cosf32","Returns the cosine of an `f32`."],["cosf64","Returns the cosine of an `f64`."],["ctlz","Returns the number of leading unset bits (zeroes) in an integer type `T`."],["ctlz_nonzero","Like `ctlz`, but extra-unsafe as it returns `undef` when given an `x` with value `0`."],["ctpop","Returns the number of bits set in an integer type `T`"],["cttz","Returns the number of trailing unset bits (zeroes) in an integer type `T`."],["cttz_nonzero","Like `cttz`, but extra-unsafe as it returns `undef` when given an `x` with value `0`."],["discriminant_value","Returns the value of the discriminant for the variant in ‘v’; if `T` has no discriminant, returns `0`."],["drop_in_place",""],["exact_div","Performs an exact division, resulting in undefined behavior where `x % y != 0` or `y == 0` or `x == T::MIN && y == -1`"],["exp2f32","Returns 2 raised to the power of an `f32`."],["exp2f64","Returns 2 raised to the power of an `f64`."],["expf32","Returns the exponential of an `f32`."],["expf64","Returns the exponential of an `f64`."],["fabsf32","Returns the absolute value of an `f32`."],["fabsf64","Returns the absolute value of an `f64`."],["fadd_fast","Float addition that allows optimizations based on algebraic rules. May assume inputs are finite."],["fdiv_fast","Float division that allows optimizations based on algebraic rules. May assume inputs are finite."],["float_to_int_unchecked","Convert with LLVM’s fptoui/fptosi, which may return undef for values out of range (https://github.com/rust-lang/rust/issues/10184)"],["floorf32","Returns the largest integer less than or equal to an `f32`."],["floorf64","Returns the largest integer less than or equal to an `f64`."],["fmaf32","Returns `a * b + c` for `f32` values."],["fmaf64","Returns `a * b + c` for `f64` values."],["fmul_fast","Float multiplication that allows optimizations based on algebraic rules. May assume inputs are finite."],["forget","Moves a value out of scope without running drop glue."],["frem_fast","Float remainder that allows optimizations based on algebraic rules. May assume inputs are finite."],["fsub_fast","Float subtraction that allows optimizations based on algebraic rules. May assume inputs are finite."],["likely","Hints to the compiler that branch condition is likely to be true. Returns the value passed to it."],["log10f32","Returns the base 10 logarithm of an `f32`."],["log10f64","Returns the base 10 logarithm of an `f64`."],["log2f32","Returns the base 2 logarithm of an `f32`."],["log2f64","Returns the base 2 logarithm of an `f64`."],["logf32","Returns the natural logarithm of an `f32`."],["logf64","Returns the natural logarithm of an `f64`."],["maxnumf32","Returns the maximum of two `f32` values."],["maxnumf64","Returns the maximum of two `f64` values."],["min_align_of","The minimum alignment of a type."],["min_align_of_val","The required alignment of the referenced value."],["minnumf32","Returns the minimum of two `f32` values."],["minnumf64","Returns the minimum of two `f64` values."],["mul_with_overflow","Performs checked integer multiplication"],["nearbyintf32","Returns the nearest integer to an `f32`."],["nearbyintf64","Returns the nearest integer to an `f64`."],["needs_drop","Returns `true` if the actual type given as `T` requires drop glue; returns `false` if the actual type provided for `T` implements `Copy`."],["nontemporal_store","Emits a `!nontemporal` store according to LLVM (see their docs). Probably will never become stable."],["offset","Calculates the offset from a pointer."],["powf32","Raises an `f32` to an `f32` power."],["powf64","Raises an `f64` to an `f64` power."],["powif32","Raises an `f32` to an integer power."],["powif64","Raises an `f64` to an integer power."],["pref_align_of","The preferred alignment of a type."],["prefetch_read_data","The `prefetch` intrinsic is a hint to the code generator to insert a prefetch instruction if supported; otherwise, it is a no-op. Prefetches have no effect on the behavior of the program but can change its performance characteristics."],["prefetch_read_instruction","The `prefetch` intrinsic is a hint to the code generator to insert a prefetch instruction if supported; otherwise, it is a no-op. Prefetches have no effect on the behavior of the program but can change its performance characteristics."],["prefetch_write_data","The `prefetch` intrinsic is a hint to the code generator to insert a prefetch instruction if supported; otherwise, it is a no-op. Prefetches have no effect on the behavior of the program but can change its performance characteristics."],["prefetch_write_instruction","The `prefetch` intrinsic is a hint to the code generator to insert a prefetch instruction if supported; otherwise, it is a no-op. Prefetches have no effect on the behavior of the program but can change its performance characteristics."],["ptr_guaranteed_eq","See documentation of `<*const T>::guaranteed_eq` for details."],["ptr_guaranteed_ne","See documentation of `<*const T>::guaranteed_ne` for details."],["ptr_offset_from","See documentation of `<*const T>::offset_from` for details."],["raw_eq","Determines whether the raw bytes of the two values are equal."],["rintf32","Returns the nearest integer to an `f32`. May raise an inexact floating-point exception if the argument is not an integer."],["rintf64","Returns the nearest integer to an `f64`. May raise an inexact floating-point exception if the argument is not an integer."],["rotate_left","Performs rotate left."],["rotate_right","Performs rotate right."],["roundf32","Returns the nearest integer to an `f32`. Rounds half-way cases away from zero."],["roundf64","Returns the nearest integer to an `f64`. Rounds half-way cases away from zero."],["rustc_peek","Magic intrinsic that derives its meaning from attributes attached to the function."],["saturating_add","Computes `a + b`, saturating at numeric bounds."],["saturating_sub","Computes `a - b`, saturating at numeric bounds."],["sinf32","Returns the sine of an `f32`."],["sinf64","Returns the sine of an `f64`."],["size_of","The size of a type in bytes."],["size_of_val","The size of the referenced value in bytes."],["sqrtf32","Returns the square root of an `f32`"],["sqrtf64","Returns the square root of an `f64`"],["sub_with_overflow","Performs checked integer subtraction"],["transmute","Reinterprets the bits of a value of one type as another type."],["truncf32","Returns the integer part of an `f32`."],["truncf64","Returns the integer part of an `f64`."],["try","Rust’s “try catch” construct which invokes the function pointer `try_fn` with the data pointer `data`."],["type_id","Gets an identifier which is globally unique to the specified type. This function will return the same value for a type regardless of whichever crate it is invoked in."],["type_name","Gets a static string slice containing the name of a type."],["unaligned_volatile_load","Performs a volatile load from the `src` pointer The pointer is not required to be aligned."],["unaligned_volatile_store","Performs a volatile store to the `dst` pointer. The pointer is not required to be aligned."],["unchecked_add","Returns the result of an unchecked addition, resulting in undefined behavior when `x + y > T::MAX` or `x + y < T::MIN`."],["unchecked_div","Performs an unchecked division, resulting in undefined behavior where `y == 0` or `x == T::MIN && y == -1`"],["unchecked_mul","Returns the result of an unchecked multiplication, resulting in undefined behavior when `x * y > T::MAX` or `x * y < T::MIN`."],["unchecked_rem","Returns the remainder of an unchecked division, resulting in undefined behavior when `y == 0` or `x == T::MIN && y == -1`"],["unchecked_shl","Performs an unchecked left shift, resulting in undefined behavior when `y < 0` or `y >= N`, where N is the width of T in bits."],["unchecked_shr","Performs an unchecked right shift, resulting in undefined behavior when `y < 0` or `y >= N`, where N is the width of T in bits."],["unchecked_sub","Returns the result of an unchecked subtraction, resulting in undefined behavior when `x - y > T::MAX` or `x - y < T::MIN`."],["unlikely","Hints to the compiler that branch condition is likely to be false. Returns the value passed to it."],["unreachable","Informs the optimizer that this point in the code is not reachable, enabling further optimizations."],["variant_count","Returns the number of variants of the type `T` cast to a `usize`; if `T` has no variants, returns `0`. Uninhabited variants will be counted."],["volatile_copy_memory","Equivalent to the appropriate `llvm.memmove.p0i8.0i8.*` intrinsic, with a size of `count * size_of::<T>()` and an alignment of `min_align_of::<T>()`"],["volatile_copy_nonoverlapping_memory","Equivalent to the appropriate `llvm.memcpy.p0i8.0i8.*` intrinsic, with a size of `count` * `size_of::<T>()` and an alignment of `min_align_of::<T>()`"],["volatile_load","Performs a volatile load from the `src` pointer."],["volatile_set_memory","Equivalent to the appropriate `llvm.memset.p0i8.*` intrinsic, with a size of `count * size_of::<T>()` and an alignment of `min_align_of::<T>()`."],["volatile_store","Performs a volatile store to the `dst` pointer."],["wrapping_add","Returns (a + b) mod 2N, where N is the width of T in bits."],["wrapping_mul","Returns (a * b) mod 2N, where N is the width of T in bits."],["wrapping_sub","Returns (a - b) mod 2N, where N is the width of T in bits."],["write_bytes","Sets `count * size_of::<T>()` bytes of memory starting at `dst` to `val`."]]});