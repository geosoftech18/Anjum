import type { Meta, StoryObj } from "@storybook/react";

import { SidebarLayout } from "@/catalyst/sidebar-layout";
import { Navbar } from "@/catalyst/navbar";
import Sidebar from "@/components/ui/sidebar";
import {
	Cog6ToothIcon,
	HomeIcon,
	InboxIcon,
	MagnifyingGlassIcon,
	MegaphoneIcon,
	QuestionMarkCircleIcon,
	SparklesIcon,
	Square2StackIcon,
	TicketIcon,
	UsersIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import {
	Cog8ToothIcon,
	LightBulbIcon,
	ShieldCheckIcon,
	UserIcon,
} from "@heroicons/react/16/solid";

const meta: Meta<typeof SidebarLayout> = {
	title: "Catalyst/Sidebar Layout",
	component: SidebarLayout,
};

export default meta;

type Story = StoryObj<typeof SidebarLayout>;

export const Initial: Story = {
	args: {
		navbar: Navbar({}),
		sidebar: Sidebar({
			pathname: "/",
			workspaces: [],
			topNavLinks: [
				{
					href: "/search",
					label: "Search",
					icon: <MagnifyingGlassIcon />,
				},
				{
					href: "/inbox",
					label: "Inbox",
					icon: <InboxIcon />,
				},
			],
			mainNavLinks: [
				{
					href: "/",
					label: "Home",
					icon: <HomeIcon />,
				},
				{
					href: "/events",
					label: "Events",
					icon: <Square2StackIcon />,
				},
				{
					href: "/orders",
					label: "Orders",
					icon: <TicketIcon />,
				},
				{
					href: "/settings",
					label: "Settings",
					icon: <Cog6ToothIcon />,
				},
				{
					href: "/broadcasts",
					label: "Broadcasts",
					icon: <MegaphoneIcon />,
				},
				{
					href: "/users",
					label: "Users",
					icon: <UsersIcon />,
				},
			],
			shortcutsLabel: "Upcoming Events",
			shortcuts: [
				{
					href: "/events/1",
					label: "Bear Hug: Live in Concert",
				},
				{
					href: "/events/2",
					label: "Viking People",
				},
				{
					href: "/events/3",
					label: "Six Fingers — DJ Set",
				},
				{
					href: "/events/4",
					label: "We All Look The Same",
				},
			],
			bottomNavLinks: [
				{
					href: "/support",
					label: "Support",
					icon: <QuestionMarkCircleIcon />,
				},
				{
					href: "/changelog",
					label: "Changelog",
					icon: <SparklesIcon />,
				},
			],
			user: {
				full_name: "Jane Doe",
				email: "jane@example.com",
				avatar_url: "https://randomuser.me/api/portraits/women/64.jpg",
			},
			accountTopLinks: [
				{
					href: "/my-profile",
					label: "My profile",
					icon: <UserIcon />,
				},
				{
					href: "/settings",
					label: "Settings",
					icon: <Cog8ToothIcon />,
				},
			],
			accountBottomLinks: [
				{
					href: "/privacy-policy",
					label: "Privacy policy",
					icon: <ShieldCheckIcon />,
				},
				{
					href: "/share-feedback",
					label: "Share feedback",
					icon: <LightBulbIcon />,
				},
			],
		}),
	},
};

export const WithAWorkspace: Story = {
	name: "With a workspace",
	args: {
		navbar: Navbar({}),
		sidebar: Sidebar({
			pathname: "/",
			workspaces: [
				{
					id: "1",
					name: "Acme Corp",
					avatar_url:
						"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
				},
			],
			topNavLinks: [
				{
					href: "/search",
					label: "Search",
					icon: <MagnifyingGlassIcon />,
				},
				{
					href: "/inbox",
					label: "Inbox",
					icon: <InboxIcon />,
				},
			],
			mainNavLinks: [
				{
					href: "/",
					label: "Home",
					icon: <HomeIcon />,
				},
				{
					href: "/events",
					label: "Events",
					icon: <Square2StackIcon />,
				},
				{
					href: "/orders",
					label: "Orders",
					icon: <TicketIcon />,
				},
				{
					href: "/settings",
					label: "Settings",
					icon: <Cog6ToothIcon />,
				},
				{
					href: "/broadcasts",
					label: "Broadcasts",
					icon: <MegaphoneIcon />,
				},
				{
					href: "/users",
					label: "Users",
					icon: <UsersIcon />,
				},
			],
			shortcutsLabel: "Upcoming Events",
			shortcuts: [
				{
					href: "/events/1",
					label: "Bear Hug: Live in Concert",
				},
				{
					href: "/events/2",
					label: "Viking People",
				},
				{
					href: "/events/3",
					label: "Six Fingers — DJ Set",
				},
				{
					href: "/events/4",
					label: "We All Look The Same",
				},
			],
			bottomNavLinks: [
				{
					href: "/support",
					label: "Support",
					icon: <QuestionMarkCircleIcon />,
				},
				{
					href: "/changelog",
					label: "Changelog",
					icon: <SparklesIcon />,
				},
			],
			user: {
				full_name: "Jane Doe",
				email: "jane@example.com",
				avatar_url: "https://randomuser.me/api/portraits/women/64.jpg",
			},
			accountTopLinks: [
				{
					href: "/my-profile",
					label: "My profile",
					icon: <UserIcon />,
				},
				{
					href: "/settings",
					label: "Settings",
					icon: <Cog8ToothIcon />,
				},
			],
			accountBottomLinks: [
				{
					href: "/privacy-policy",
					label: "Privacy policy",
					icon: <ShieldCheckIcon />,
				},
				{
					href: "/share-feedback",
					label: "Share feedback",
					icon: <LightBulbIcon />,
				},
			],
		}),
	},
};

export const SidebarActiveLink: Story = {
	name: "With a different active link",
	args: {
		navbar: Navbar({}),
		sidebar: Sidebar({
			pathname: "/events",
			workspaces: [
				{
					id: "1",
					name: "Acme Corp",
					avatar_url:
						"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
				},
			],
			topNavLinks: [
				{
					href: "/search",
					label: "Search",
					icon: <MagnifyingGlassIcon />,
				},
				{
					href: "/inbox",
					label: "Inbox",
					icon: <InboxIcon />,
				},
			],
			mainNavLinks: [
				{
					href: "/",
					label: "Home",
					icon: <HomeIcon />,
				},
				{
					href: "/events",
					label: "Events",
					icon: <Square2StackIcon />,
				},
				{
					href: "/orders",
					label: "Orders",
					icon: <TicketIcon />,
				},
				{
					href: "/settings",
					label: "Settings",
					icon: <Cog6ToothIcon />,
				},
				{
					href: "/broadcasts",
					label: "Broadcasts",
					icon: <MegaphoneIcon />,
				},
				{
					href: "/users",
					label: "Users",
					icon: <UsersIcon />,
				},
			],
			shortcutsLabel: "Upcoming Events",
			shortcuts: [
				{
					href: "/events/1",
					label: "Bear Hug: Live in Concert",
				},
				{
					href: "/events/2",
					label: "Viking People",
				},
				{
					href: "/events/3",
					label: "Six Fingers — DJ Set",
				},
				{
					href: "/events/4",
					label: "We All Look The Same",
				},
			],
			bottomNavLinks: [
				{
					href: "/support",
					label: "Support",
					icon: <QuestionMarkCircleIcon />,
				},
				{
					href: "/changelog",
					label: "Changelog",
					icon: <SparklesIcon />,
				},
			],
			user: {
				full_name: "Jane Doe",
				email: "jane@example.com",
				avatar_url: "https://randomuser.me/api/portraits/women/64.jpg",
			},
			accountTopLinks: [
				{
					href: "/my-profile",
					label: "My profile",
					icon: <UserIcon />,
				},
				{
					href: "/settings",
					label: "Settings",
					icon: <Cog8ToothIcon />,
				},
			],
			accountBottomLinks: [
				{
					href: "/privacy-policy",
					label: "Privacy policy",
					icon: <ShieldCheckIcon />,
				},
				{
					href: "/share-feedback",
					label: "Share feedback",
					icon: <LightBulbIcon />,
				},
			],
		}),
	},
};

export const WithMultipleWorkspaces: Story = {
	name: "With multiple workspaces",
	args: {
		navbar: Navbar({}),
		sidebar: Sidebar({
			pathname: "/",
			workspaces: [
				{
					id: "1",
					name: "Acme Corp",
					avatar_url:
						"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
				},
				{
					id: "2",
					name: "Acme Ltd",
					avatar_url:
						"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
				},
			],
			topNavLinks: [
				{
					href: "/search",
					label: "Search",
					icon: <MagnifyingGlassIcon />,
				},
				{
					href: "/inbox",
					label: "Inbox",
					icon: <InboxIcon />,
				},
			],
			mainNavLinks: [
				{
					href: "/",
					label: "Home",
					icon: <HomeIcon />,
				},
				{
					href: "/events",
					label: "Events",
					icon: <Square2StackIcon />,
				},
				{
					href: "/orders",
					label: "Orders",
					icon: <TicketIcon />,
				},
				{
					href: "/settings",
					label: "Settings",
					icon: <Cog6ToothIcon />,
				},
				{
					href: "/broadcasts",
					label: "Broadcasts",
					icon: <MegaphoneIcon />,
				},
				{
					href: "/users",
					label: "Users",
					icon: <UsersIcon />,
				},
			],
			shortcutsLabel: "Upcoming Events",
			shortcuts: [
				{
					href: "/events/1",
					label: "Bear Hug: Live in Concert",
				},
				{
					href: "/events/2",
					label: "Viking People",
				},
				{
					href: "/events/3",
					label: "Six Fingers — DJ Set",
				},
				{
					href: "/events/4",
					label: "We All Look The Same",
				},
			],
			bottomNavLinks: [
				{
					href: "/support",
					label: "Support",
					icon: <QuestionMarkCircleIcon />,
				},
				{
					href: "/changelog",
					label: "Changelog",
					icon: <SparklesIcon />,
				},
			],
			user: {
				full_name: "Jane Doe",
				email: "jane@example.com",
				avatar_url: "https://randomuser.me/api/portraits/women/64.jpg",
			},
			accountTopLinks: [
				{
					href: "/my-profile",
					label: "My profile",
					icon: <UserIcon />,
				},
				{
					href: "/settings",
					label: "Settings",
					icon: <Cog8ToothIcon />,
				},
			],
			accountBottomLinks: [
				{
					href: "/privacy-policy",
					label: "Privacy policy",
					icon: <ShieldCheckIcon />,
				},
				{
					href: "/share-feedback",
					label: "Share feedback",
					icon: <LightBulbIcon />,
				},
			],
		}),
	},
};
