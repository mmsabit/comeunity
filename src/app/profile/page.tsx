"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdEdit, MdPersonOutline, MdSave, MdClose } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session, isPending, error, refetch } = authClient.useSession();
  const user = session?.user;
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedName = name.trim();
    if (!updatedName) {
      toast.error("Name cannot be empty.", {
        position: "bottom-right",
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    setIsSaving(true);
    try {
      const { error: updateError } = await authClient.updateUser({
        name: updatedName,
      });

      if (updateError) {
        toast.error(updateError.message, {
          position: "bottom-right",
          theme: "light",
          transition: Bounce,
        });
        return;
      }

      setName(updatedName);
      setIsEditing(false);
      try {
        await refetch();
      } catch (refreshError) {
        console.error("The profile was saved, but the session could not be refreshed.", refreshError);
        toast.error("Your name was saved, but the profile could not refresh. Please reload the page.", {
          position: "bottom-right",
          theme: "light",
          transition: Bounce,
        });
        return;
      }

      toast.success("Your name has been updated.", {
        position: "bottom-right",
        theme: "light",
        transition: Bounce,
      });
    } catch (saveError) {
      console.error("Unable to update the profile name.", saveError);
      toast.error("Unable to update your name. Please try again.", {
        position: "bottom-right",
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setName(user?.name ?? "");
    setIsEditing(false);
  };

  if (isPending) {
    return (
      <div className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-surface px-4">
        <span className="loading loading-spinner loading-lg text-brand-600" aria-label="Loading profile" />
      </div>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-surface px-4 py-12">
        <div className="w-full max-w-lg rounded-3xl border border-slate-200/80 bg-white p-8 text-center shadow-card">
          <h1 className="text-xl font-bold text-slate-900">Profile unavailable</h1>
          <p className="mt-2 text-sm text-slate-600">
            We couldn&apos;t load your profile. Please refresh the page and try again.
          </p>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-surface px-4 py-12">
        <div className="w-full max-w-lg rounded-3xl border border-slate-200/80 bg-white p-8 text-center shadow-card">
          <h1 className="text-xl font-bold text-slate-900">Sign in to view your profile</h1>
          <p className="mt-2 text-sm text-slate-600">
            Your profile details are available after you sign in.
          </p>
          <Link
            href="/signin"
            className="mt-6 inline-flex rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Sign in
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[calc(100vh-160px)] overflow-hidden bg-surface px-4 py-12 sm:px-6 sm:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-linear-to-br from-brand-100/70 via-indigo-50/50 to-transparent" />
      <div className="relative mx-auto w-full max-w-4xl">
        <header className="mb-8 sm:mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">
            Your account
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Profile
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Manage the personal details shown to your community.
          </p>
        </header>

        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-card">
          <div className="h-28 bg-linear-to-r from-brand-600 via-indigo-600 to-violet-500 sm:h-36" />

          <div className="px-5 pb-7 sm:px-10 sm:pb-10">
            <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-4 sm:gap-5">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-3xl border-4 border-white bg-slate-100 text-brand-600 shadow-card sm:h-28 sm:w-28">
                  {user.image ? (
                    <Image
                      alt={`${user.name || "User"} profile picture`}
                      className="h-full w-full object-cover"
                      height={112}
                      src={user.image}
                      unoptimized
                      width={112}
                    />
                  ) : (
                    <MdPersonOutline aria-hidden="true" className="h-12 w-12 sm:h-14 sm:w-14" />
                  )}
                </div>
                <div className="min-w-0 pb-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Community member
                  </p>
                  <h2 className="mt-1 truncate text-xl font-bold text-slate-900 sm:text-2xl">
                    {user.name || "Your profile"}
                  </h2>
                </div>
              </div>

              {!isEditing && (
                <button
                  className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/30 sm:self-auto"
                  onClick={() => {
                    setName(user.name ?? "");
                    setIsEditing(true);
                  }}
                  type="button"
                >
                  <MdEdit aria-hidden="true" className="text-lg" />
                  Edit name
                </button>
              )}
            </div>

            <div className="mt-8 border-t border-slate-100 pt-7 sm:mt-10 sm:pt-8">
              <form className="space-y-6" onSubmit={handleSave}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500"
                      htmlFor="profile-name"
                    >
                      Name
                    </label>
                    {isEditing ? (
                      <input
                        autoFocus
                        className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
                        id="profile-name"
                        maxLength={80}
                        onChange={(event) => setName(event.target.value)}
                        required
                        value={name}
                      />
                    ) : (
                      <p className="flex min-h-12 items-center wrap-break-word rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                        {user.name || "Not set"}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500"
                      htmlFor="profile-email"
                    >
                      Email address
                    </label>
                    <p
                      className="flex min-h-12 items-center break-all rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800"
                      id="profile-email"
                    >
                      {user.email}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      Email address cannot be changed here.
                    </p>
                  </div>
                </div>

                {isEditing && (
                  <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                    <button
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                      disabled={isSaving}
                      onClick={handleCancel}
                      type="button"
                    >
                      <MdClose aria-hidden="true" className="text-lg" />
                      Cancel
                    </button>
                    <button
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
                      disabled={isSaving || !name.trim()}
                      type="submit"
                    >
                      <MdSave aria-hidden="true" className="text-lg" />
                      {isSaving ? "Saving..." : "Save changes"}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
